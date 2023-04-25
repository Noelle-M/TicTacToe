import { createStore } from 'redux';
import { gameReducers } from '../reducers/gameReducers';

const gameStore = createStore(
    gameReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { gameStore };
