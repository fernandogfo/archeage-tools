import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { triggerLocalStorageUpdate as dailies } from 'actions/dailies';
import { triggerLocalStorageUpdate as calendar } from 'actions/calendar';
import { triggerLocalStorageUpdate as display } from 'actions/display';
import { triggerLocalStorageUpdate as thunderstruck } from 'actions/thunderstruck';
import { triggerLocalStorageUpdate as tradepacks } from 'actions/tradepacks';
import { setItem } from 'utils/localStorage';
import { getLocalData } from 'reducers';

const keysAndActionTypes = {
  dailies,
  calendar,
  display,
  thunderstruck,
  tradepacks,
};

const updateLocalAfterActions = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();

  Object.keys(keysAndActionTypes).forEach((key) => {
    const actionTypes = keysAndActionTypes[key];
    if (actionTypes.includes(action.type)) {
      setItem(key, getLocalData[key](state));
    }
  });

  return result;
};

export default (history) => [
  routerMiddleware(history),
  thunk,
  updateLocalAfterActions,
]
