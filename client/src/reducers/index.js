import { combineReducers } from 'redux';
import menureducers from './menureducers';
import user_reducer from './user_reducer';

export default combineReducers({
    menureducers,
    user_reducer,
}) 