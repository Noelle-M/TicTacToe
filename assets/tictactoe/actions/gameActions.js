// Import des types d'action
import { MAKE_MOVE, JUMP_TO, RESET_GAME } from './types';

// Action creator pour faire un mouvement
export const makeMove = (index) => ({
    type: MAKE_MOVE,
    payload: index, // L'indice du mouvement
});

// Action creator pour aller à un état spécifique
export const jumpTo = (step) => ({
    type: JUMP_TO,
    payload: step, // L'étape vers laquelle sauter
});

// Action creator pour réinitialiser le jeu
export const resetGame = () => ({
    type: RESET_GAME,
});
