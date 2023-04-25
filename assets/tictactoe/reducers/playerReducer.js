import {
    ADD_PLAYER1,
    ADD_PLAYER2,
    ADD_PLAYER_SUCCESS,
    ADD_PLAYER_FAILURE,
    FETCH_PLAYERS_SUCCESS
} from '../actions/types';

const initialState = {
    players: [],
    error: null,
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLAYER1:
            return {
                ...state,
                players: [...state.players, { player1: action.payload.player1 }],
            };
        case ADD_PLAYER2:
            return {
                ...state,
                players: [...state.players, { player2: action.payload.player2 }],
            };
        case ADD_PLAYER_SUCCESS:
            return {
                ...state,
                players: [...state.players, { player1: action.payload.player1, player2: action.payload.player2 }],
            };
        case ADD_PLAYER_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            };
        case FETCH_PLAYERS_SUCCESS:
            return {
                ...state,
                players: action.payload.players,
            };
        default:
            return state;
    }
};

export { playerReducer };
