import { MAKE_MOVE, JUMP_TO, RESET_GAME } from '../actions/types';

// État initial du jeu
const initialState = {
    history: [
        {
            // Crée un tableau de 9 cases remplies de 'null'
            squares: Array(9).fill(null),
        },
    ],
    stepNumber: 0, // Initialise le compteur de coups à 0
    xIsNext: true, // Le premier joueur à jouer est le joueur "X"
    winner: null,  // Aucun gagnant au début du jeu
};


// Fonction pour calculer le gagnant
function calculateWinner(squares) {
    const lines = [
        // Combinaisons gagnantes pour les lignes, colonnes et diagonales
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    let winningLine = null;
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            winningLine = lines[i];
        }
    }
    return winningLine;
}

const gameReducers = (state = initialState, action) => {
    switch (action.type) {
        case MAKE_MOVE:
            // Copie de l'historique des coups et des cases
            const history = state.history.slice(0, state.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();

            // Vérifie s'il y a un gagnant ou si la case a déjà été jouée
            if (calculateWinner(squares) || squares[action.payload]) {
                return state;
            }

            // Met à jour la case avec "X" ou "O" en fonction du joueur actuel
            squares[action.payload] = state.xIsNext ? "X" : "O";
            let winner = calculateWinner(squares);

            return {
                history: history.concat([{ squares: squares }]),
                stepNumber: history.length,
                xIsNext: !state.xIsNext,
                winner: winner,
            };

        case JUMP_TO:
            // Met à jour le stepNumber et le joueur actuel
            return {
                ...state,
                stepNumber: action.payload,
                xIsNext: action.payload % 2 === 0,
            };

        case RESET_GAME:
            // Réinitialise le jeu à son état initial
            return initialState;

        default:
            return state;
    }
};

export { gameReducers };
