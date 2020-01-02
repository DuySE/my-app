import { combineReducers } from 'redux';
import counters from './counters';
import todo from './todo';
import blog from './blog';
import library from './library';
import joke from './joke';

export const REHYDRATE_COMPLETE = 'root/REHYDRATE_COMPLETE';

export default combineReducers({
    counters,
    todo,
    blog,
    library,
    joke,
});
