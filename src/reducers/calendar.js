import {
  CLEAR_ALERTS,
  SET_ALERT,
  SET_REGION,
} from 'constants/schedule';
import initialState from 'initialStates/calendar';
import { pathOr } from 'ramda';
import { getItem } from 'utils/localStorage';

const calendar = (state = getItem('calendar', initialState), action) => {
  switch (action.type) {
    case SET_REGION:
      return {
        ...state,
        regionNA: action.regionNA,
      };
    case SET_ALERT:
      const alerts = pathOr([], ['alerts', action.eventId])(state);
      if (action.value !== '') {
        const index = alerts.indexOf(action.value);
        if (index >= 0) {
          alerts.splice(index, 1);
        } else {
          alerts.push(action.value);
        }
      } else {
        alerts.splice(0);
      }

      return {
        ...state,
        alerts: {
          ...state.alerts,
          [action.eventId]: alerts,
        },
      };
    case CLEAR_ALERTS:
      return {
        ...state,
        alerts: {},
      };
    default:
      return state;
  }
};

export default calendar;
