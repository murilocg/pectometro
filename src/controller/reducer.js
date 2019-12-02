import { combineReducers } from 'redux';
import pec from './pec/pecReducer';
import notification from './notification/notificationReducer';

const reducer = combineReducers({ pec, notification });

export default reducer;
