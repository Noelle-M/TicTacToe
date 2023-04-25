import { createSelector } from 'reselect';

const playerState = (state) => state.players;

export const selectPlayers = createSelector(
    [playerState],
    (players) => players.players
);
