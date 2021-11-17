import { combineReducers } from 'redux';
import clickReducer from './clickReducer';
import gameReducer from "./gameReducer";

export default combineReducers({
    game: gameReducer,
    clickCount: clickReducer,
})