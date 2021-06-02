import { combineReducers } from 'redux';
import menureducers from './menureducers';
import user_reducer from './user_reducer';
import picclicked from './piccliked';

export default combineReducers({
    menureducers,
    user_reducer,
    picclicked
}) 