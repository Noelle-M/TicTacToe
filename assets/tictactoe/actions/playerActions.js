// Import des types d'action et de la bibliothèque Axios
import {
    FETCH_PLAYERS_SUCCESS,
    ADD_PLAYER_SUCCESS,
    ADD_PLAYER_FAILURE,
    FETCH_PLAYERS_FAILURE,
    FETCH_PLAYERS_REQUEST,
} from './types';
import axios from "axios";

// Action creator pour ajouter un joueur avec succès
export const addPlayerSuccess = (player1, player2) => ({
    type: ADD_PLAYER_SUCCESS,
    payload: {
        player1,
        player2,
    },
});

// Action creator pour gérer l'échec de l'ajout d'un joueur
export const addPlayerFailure = (error) => ({
    type: ADD_PLAYER_FAILURE,
    payload: {
        error,
    },
});

// Action creator pour gérer l'échec de la récupération de la liste des joueurs
export const fetchPlayersFailure = (error) => ({
    type: FETCH_PLAYERS_FAILURE,
    payload: error,
});

// Action creator pour récupérer avec succès la liste des joueurs
export const fetchPlayersSuccess = (players) => ({
    type: FETCH_PLAYERS_SUCCESS,
    payload: {
        players,
    },
});

// Action creator pour ajouter un joueur à la liste de joueurs
export const addPlayer = (player1, player2) => {
    return async function (dispatch) {
        try {
            const response = await fetch('players', { // Envoi d'une requête POST à l'API
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ player1, player2 }), // Corps de la requête
            });
            const data = await response.json();
            if (data.id) {
                dispatch(addPlayerSuccess(data.player1, data.player2));
            } else {
                dispatch(addPlayerFailure('Failed to create player'));
            }
        } catch (error) {
            dispatch(addPlayerFailure(error.message));
        }
    };
};

// Action creator pour récupérer la liste des joueurs
export const fetchPlayersRequest = () => ({
    type: FETCH_PLAYERS_REQUEST,
});

// Action creator pour récupérer la liste des joueurs avec Axios
export const fetchPlayers = (url) => async (dispatch) => {
    dispatch(fetchPlayersRequest());
    try {
        const response = await axios.get(url);
        const players = response.data;
        dispatch(fetchPlayersSuccess(players));
    } catch (error) {
        dispatch(fetchPlayersFailure(error.message));
    }
};
