import { combineReducers } from 'redux';
import pec from './pec/pecReducer';
import notification from './notification/notificationReducer';
import loading from './loading/loadingReducer';

const reducer = combineReducers({ pec, notification, loading });

export default reducer;
