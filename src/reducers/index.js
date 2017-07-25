import { combineReducers } from 'redux';
import { RobotsReducer } from './RobotsReducer';
import { CurrentAppReducer } from './CurrentAppReducer';

const rootReducer = combineReducers({
    robots: RobotsReducer,
    currentAppState: CurrentAppReducer
});

export default rootReducer;
