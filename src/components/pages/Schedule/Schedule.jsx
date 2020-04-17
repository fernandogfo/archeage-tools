import {
  AppBar,
  CircularProgress,
  IconButton,
  Paper,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import {
  fetchEvents,
  fetchEventTypes,
} from 'actions/gameData';
import {
  clearAlerts,
  setRegion,
  setVolume,
} from 'actions/schedule';
import cn from 'classnames';
import IfPerm from 'components/IfPerm';
import {
  ALERT_CUE,
  ALERT_OPTIONS,
  EVENT_TYPE_OTHER,
  VOLUME_DEFAULT,
} from 'constants/schedule';
import debounce from 'lodash.debounce';
import moment from 'moment';
import moment_tz from 'moment-timezone';
import {
  equals,
  pathOr,
} from 'ramda';
import React, { Component } from 'react';
import {
  bool,
  func,
} from 'react-proptypes';
import { connect } from 'react-redux';
import { objectHasProperties } from 'utils/object';
import {
  getDayKey,
  getReminderTime,
  hhmmssToInt,
} from 'utils/schedule';
import { deepCopy } from 'utils/skills';
import { setTitle } from 'utils/string';
import EditEvent from './EditEvent';
import EventList from './EventList';
import InGameTime from './InGameTime';
import Volume from './Volume';

// prevent optimize imports from removing
moment_tz;

class Schedule extends Component {
  static propTypes = {
    regionNA: bool,
    clearAlerts: func.isRequired,
    hasAlerts: bool,
  };

  static defaultProps = {
    regionNA: true,
    hasAlerts: false,
  };

  state = {
    events: [],
    width: 0,
    editOpen: false,
    editId: null,
    showDisabled: false,
    interacted: null,
  };

  alerts = {};

  ref = React.createRef();

  interval = null;

  componentDidMount() {
    const { fetchEventTypes, fetchEvents, events, regionNA, hasAlerts, volume } = this.props;
    fetchEventTypes();
    fetchEvents();

    if (objectHasProperties(events)) {
      this.setupEvents(events, regionNA);
    }

    window.addEventListener('resize', this._handleResize);

    // preload audio cues
    Object.values(ALERT_CUE).forEach(cue => {
      const alert = this.alerts[cue.name] = new Audio(cue.file);
      alert.load();
      alert.setVolume = function (volume) {
        this.volume = volume / 100;
      };
      alert.setVolume(volume || VOLUME_DEFAULT);
    });

    // test for page interaction, otherwise display an error banner
    if (hasAlerts) {
      this.playCue(ALERT_CUE.TEST);
    }
  }

  UNSAFE_componentWillUpdate(nextProps) {
    const { events, regionNA } = nextProps;

    if (!equals(events, this.props.events) || regionNA !== this.props.regionNA) {
      this.setupEvents(events, regionNA);
    }
  }

  componentWillUnmount() {
    this.interval && clearInterval(this.interval);
    window.removeEventListener('resize', this._handleResize);
  }

  playCue = (cue) => {
    const { interacted } = this.state;

    const alert = this.alerts[cue.name];
    alert.pause();
    alert.currentTime = 0;
    alert
    .play()
    .then(() => {
      !interacted && this.setState({ interacted: true });
    })
    .catch(() => {
      this.setState({ interacted: false });
    });
  };

  confirmInteraction = () => {
    this.setState({ interacted: true }, () => this.playCue(ALERT_CUE.TEST));
  };

  setupEvents = (events, regionNA) => {
    this.handleResize();
    events = Object.values(events);
    if (!this.state.showDisabled) {
      events = events.filter(e => !e.disabled);
    }
    events = events.map(this.calculateNextStart(regionNA));
    events.sort(this.sortEvents);
    this.setState({ events }, () => {
      if (!this.interval) {
        this.interval = setInterval(this.doTick, 1000);
        this.doTick();
      }
    });
  };

  calculateNextStart = (regionNA) => (event) => {
    const region = regionNA ? 'NA' : 'EU';
    const now = moment.utc().milliseconds(0);
    let { times } = event;
    let activeTime = null;
    let nextTime = {};

    // skip if there are no times
    if (!times) return;

    // only look through one region's times
    times = times.filter(time => !time.region || time.region === (region)).sort((a, b) => hhmmssToInt(a.time) - hhmmssToInt(b.time));
    if (times.length > 0) {
      // duplicate the last occurrence to yesterday
      const lastTime = deepCopy(times[times.length - 1]);
      lastTime.yesterday = true;
      const firstTime = deepCopy(times[0]);
      firstTime.tomorrow = true;

      times.unshift(lastTime);
      // also duplicate the first time to the end
      times.push(firstTime);
    }

    // loop through times until we get to the time that starts
    times.forEach(occurrence => {
      const { days, time, duration, yesterday, tomorrow } = occurrence;

      // create the start time from 00:00:00 format
      const [hh, mm, ss] = time.split(':');
      const startTime = moment.utc().hour(hh).minute(mm).second(ss).milliseconds(0);

      // modify yesterday/tomorrow times
      if (yesterday === true) {
        startTime.subtract(1, 'day');
      }
      if (tomorrow === true) {
        startTime.add(1, 'day');
      }

      // create the end time by adding a duration from 00:00:00 format to start time
      const endTime = moment(startTime);
      if (duration) {
        const [hh, mm, ss] = duration.split(':');
        endTime.add(hh, 'hours').add(mm, 'minutes').add(ss, 'seconds');
      }

      // if the event only starts on specific days, we need to move it to that day first
      while (days.length > 0 && !days.includes(getDayKey(startTime.day()))) {
        // subtract days for yesterday occurrences
        startTime.add(yesterday ? -1 : 1, 'day');
        endTime.add(yesterday ? -1 : 1, 'day');
      }

      // add times to object
      occurrence.startTime = startTime;
      occurrence.endTime = endTime;

      // check if an event is active right now
      if (startTime.isSameOrBefore(now) && endTime.isAfter(now)) {
        // event is active
        activeTime = occurrence;
      }

      // times are sorted, so find the next occurrence that is after right now as the next time
      if (startTime.isAfter(now) && (!nextTime.startTime || nextTime.startTime.isAfter(startTime))) {
        nextTime = occurrence;
      }
    });

    if (activeTime) {
      event.timer = activeTime.endTime;
    } else {
      event.timer = nextTime.startTime;
    }

    event.activeTime = activeTime;
    event.nextTime = nextTime;

    return event;
  };

  sortEvents = (a, b) => {
    if (a.activeTime || b.activeTime) {
      if (a.activeTime && !b.activeTime) {
        return -1;
      }
      if (!a.activeTime && b.activeTime) {
        return 1;
      }
    }
    const diff = a.timer.diff(b.timer);
    if (diff === 0) {
      if (a.name > b.name) return 1;
      if (b.name > a.name) return -1;
    }
    return diff;
  };

  doTick = () => {
    const { alerts } = this.props;
    const { events } = this.state;
    const now = moment.utc().milliseconds(0);

    let sort = false;
    let cue = null;
    let alertQueue = [];

    const triggerCue = (value) => {
      if (moment().month() === 3 && moment().date() === 1) value = ALERT_CUE.OTHER;

      if (!cue || cue.priority < value.priority) {
        cue = value;
      }
    };

    events.forEach((event, i) => {
      const startDiff = event.nextTime.startTime.diff(now);
      if (event.timer && now.isSameOrAfter(event.timer)) {
        events[i] = this.calculateNextStart(this.props.regionNA)(event);
        sort = true;
      }

      // calculate alert
      const eventAlerts = pathOr([], [event.id])(alerts);
      eventAlerts.forEach(alert => {
        if (startDiff === getReminderTime(event.nextTime, ALERT_OPTIONS[alert]) * 1000) {
          if (startDiff === 0) {
            if (event.eventType === EVENT_TYPE_OTHER) {
              triggerCue(ALERT_CUE.START_OTHER);
            } else {
              triggerCue(ALERT_CUE.START);
            }
          } else {
            triggerCue(ALERT_CUE.REMINDER);
          }
        }
      });
    });

    // play the cue
    Boolean(cue) && this.playCue(cue);

    if (sort) {
      events.sort(this.sortEvents);
    }

    this.setState({ events, now });
  };

  handleResize = () => {
    const { width } = this.ref.current.getBoundingClientRect();
    this.setState({ width });
  };

  _handleResize = debounce(this.handleResize, 100);

  setEditOpen = (editOpen, editId) => () => {
    this.setState({ editOpen, editId });
  };

  setShowDisabled = (showDisabled) => () => {
    const { events, regionNA } = this.props;

    this.setState({ showDisabled }, () => this.setupEvents(events, regionNA));
  };

  setVolume = (e, volume) => {
    this.props.setVolume(volume);
    Object.values(this.alerts).forEach(alert => alert.setVolume(volume));
    this.playCue(ALERT_CUE.REMINDER);
  };

  _setVolume = debounce(this.setVolume, 75);

  render() {
    const { regionNA, setRegion, eventTypes, mobile, hasAlerts, clearAlerts } = this.props;
    const { events, width, editOpen, editId, showDisabled, interacted } = this.state;

    // max cols = 3
    // min cols = 1
    // min col size = 350
    const cols = Math.max(Math.min(Math.floor(width / 350), 3), 1);
    const colWidth = Math.round(10000 / cols) / 100;

    setTitle('Event Schedule');

    return (
      <div className="schedule-container">
        {interacted === false &&
        <div className="section">
          <Alert severity="error" variant="filled" onClose={this.confirmInteraction}>
            <AlertTitle>Playback Error</AlertTitle>
            Alert sounds cannot play until you interact with the page. Simply close this message to interact.
          </Alert>
        </div>}
        <Paper className="section">
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography className="title-text">
                {moment.tz(moment.tz.guess()).format('z')} Schedule
              </Typography>
              {!mobile && <InGameTime mobile={mobile} />}
              <Typography variant="overline" className="region-opt">
                NA
                <Tooltip title="Toggle Regional Times">
                  <IconButton color="inherit" aria-label="Reset" onClick={() => setRegion(!regionNA)}>
                    {regionNA ? <ToggleOffIcon /> : <ToggleOnIcon />}
                  </IconButton>
                </Tooltip>
                EU
              </Typography>
              <Tooltip title="Clear all alerts">
                <span>
                  <IconButton disabled={!hasAlerts} onClick={clearAlerts} color="inherit">
                    <NotificationsOffIcon />
                  </IconButton>
                </span>
              </Tooltip>
              <Volume setVolume={this._setVolume} />
              <IfPerm permission="event.edit">
                <>
                  <Tooltip title={showDisabled ? 'Hide Disabled' : 'Show Disabled'}>
                    <IconButton onClick={this.setShowDisabled(!showDisabled)} color="inherit">
                      {showDisabled ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Add new event">
                    <IconButton onClick={this.setEditOpen(true, null)} color="inherit">
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </>
              </IfPerm>
            </Toolbar>
          </AppBar>
        </Paper>
        <div className={cn('section', 'schedule-categories')} ref={this.ref}>
          {!objectHasProperties(eventTypes) &&
          <CircularProgress size={64} color="primary" style={{ width: 'center' }} />}
          {Array.from(Array(cols)).map((_, col) => (
            <div className="schedule-column" style={{ width: `${colWidth}%` }} key={`event-col-${col}`}>
              {col === 0 && mobile && <InGameTime mobile={mobile} />}
              {Object.values(eventTypes)
              .filter((type, i) => (i + (mobile ? 1 : (cols === 2 && i > 1 && i < 4 ? 1 : 0))) % cols === col)
              .map(type => (
                <EventList
                  key={`event-list-${type.id}`}
                  {...type}
                  events={events.filter(e => e.eventType === type.id)}
                  onEdit={this.setEditOpen}
                  region={regionNA ? 'NA' : 'EU'}
                />
              ))}
            </div>
          ))}
        </div>
        <EditEvent
          onClose={this.setEditOpen(false, null)}
          open={editOpen}
          id={editId}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ calendar: { regionNA, alerts, volume }, gameData: { events, eventTypes }, display: { mobile } }) => ({
  regionNA,
  mobile,
  events,
  eventTypes,
  alerts,
  hasAlerts: objectHasProperties(alerts) && Object.values(alerts).map(a => a.length || 0).reduce((a, b) => a + b, 0) > 0,
  volume,
});

const mapDispatchToProps = {
  setRegion,
  fetchEventTypes,
  fetchEvents,
  clearAlerts,
  setVolume,
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
