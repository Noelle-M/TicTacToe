import { createSelector } from 'reselect';

// Définition du selector gameState qui retourne tout l'état global de l'application
const gameState = (state) => state;

// Définition du selector selectHistory qui prend comme input le selector gameState et retourne l'historique des coups
export const selectHistory = createSelector(
    [gameState],
    (game) => game.history
);

// Définition du selector selectStepNumber qui prend comme input le selector gameState et retourne le numéro du coup actuel
export const selectStepNumber = createSelector(
    [gameState],
    (game) => game.stepNumber
);

// Définition du selector selectXIsNext qui prend comme input le selector gameState et retourne un booléen indiquant si le joueur suivant est X ou O
export const selectXIsNext = createSelector(
    [gameState],
    (game) => game.xIsNext
);

// Définition du selector selectWinner qui prend comme input le selector gameState et retourne le gagnant du jeu
export const selectWinner = createSelector(
    [gameState],
    (game) => game.winner
);