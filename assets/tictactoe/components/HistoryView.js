// Importation des dépendances React et Redux
import React, { useState } from 'react';
import { connect } from 'react-redux';

// Importation des actions et des sélecteurs
import { jumpTo } from '../actions/gameActions';
import { selectHistory } from '../selectors/indexSelector';

// Composant pour afficher un mouvement individuel
const MoveButton = ({ move, jumpTo, selectedMove, setSelectedMove }) => {
    const handleClick = () => {
        jumpTo(move);
        setSelectedMove(move);
    };

    return (
        <li key={move}>
            <button
                onClick={handleClick}
                style={{ backgroundColor: selectedMove === move ? 'blue' : 'transparent' }}
            >
                {move ? 'Revenir au tour n°' + move : 'Revenir au début de la partie'}
            </button>
        </li>
    );
};

// Composant principal pour afficher l'historique des mouvements
const HistoryView = ({ history, jumpTo }) => {
    const [selectedMove, setSelectedMove] = useState(null);
    const moves = history.map((step, move) => (
        <MoveButton key={move} move={move} jumpTo={jumpTo} selectedMove={selectedMove} setSelectedMove={setSelectedMove} />
    ));

    return (
        <div className="text-center mt-5">
            <h1>Vue Historique</h1>
            <ol>{moves}</ol>
        </div>
    );
};

// Fonction pour extraire les données du store Redux et les injecter en tant que props
const mapStateToProps = (state) => ({
    history: selectHistory(state),
});

// Objet contenant les actions à injecter en tant que props
const mapDispatchToProps = {
    jumpTo,
};

// Connexion du composant à Redux
const ConnectedHistoryView = connect(mapStateToProps, mapDispatchToProps)(HistoryView);

// Exportation du composant connecté
export { ConnectedHistoryView };
