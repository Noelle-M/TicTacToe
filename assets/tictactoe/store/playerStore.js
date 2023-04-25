import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { playerReducer } from "../reducers/playerReducer";

const rootReducer = combineReducers({
    players: playerReducer,
});

export const playerStore = createStore(rootReducer, applyMiddleware(thunk));
