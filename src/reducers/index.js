import { combineReducers } from 'redux';
import counters from './counters';
import todo from './todo';
import blog from './blog';

export const REHYDRATE_COMPLETE = 'root/REHYDRATE_COMPLETE';

export default combineReducers({
    counters,
    todo,
    blog,
});
