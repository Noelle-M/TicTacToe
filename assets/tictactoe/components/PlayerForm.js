// Importation des dépendances
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPlayer, fetchPlayers } from '../actions/playerActions';
import { selectPlayers } from '../selectors/playerSelector';
import 'bootstrap/dist/css/bootstrap.min.css';

// Composant PlayerForm pour le formulaire de sélection des joueurs
const PlayerForm = () => {
    // États locaux pour les noms des joueurs et les joueurs sélectionnés
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [selectedPlayer1, setSelectedPlayer1] = useState('');
    const [selectedPlayer2, setSelectedPlayer2] = useState('');

    // Sélection des données du store et utilisation du hook useDispatch pour les actions
    const players = useSelector(selectPlayers);
    const dispatch = useDispatch();

    // Fonction pour récupérer les noms de joueurs uniques
    const getUniquePlayerNames = (players, playerType) => {
        const playerNames = [];

        players.forEach((player) => {
            const playerName = player[playerType];
            if (!playerNames.includes(playerName)) {
                playerNames.push(playerName);
            }
        });

        return playerNames;
    };

    const uniquePlayer1Names = getUniquePlayerNames(players, 'player1');
    const uniquePlayer2Names = getUniquePlayerNames(players, 'player2');

    // Récupération des joueurs à l'aide d'une action
    useEffect(() => {
        dispatch(fetchPlayers('/api/players'));
    }, [dispatch]);

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Vérification de la validité du formulaire
        const finalPlayer1 = player1 || selectedPlayer1;
        const finalPlayer2 = player2 || selectedPlayer2;

        if (!finalPlayer1 || !finalPlayer2) {
            alert('Veuillez saisir les noms des joueurs ou sélectionner un joueur existant.');
            return;
        }

        // Stockage des noms de joueurs dans le localStorage
        localStorage.setItem('player1', selectedPlayer1 || player1);
        localStorage.setItem('player2', selectedPlayer2 || player2);
        localStorage.setItem('isFormValid', true);

        dispatch(addPlayer(finalPlayer1, finalPlayer2));
        setPlayer1('');
        setPlayer2('');
        window.location.href = '/tictactoe';
    };

    // Rendu du composant
    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
            <div className="card col-sm-12 col-md-12 col-lg-10 col-xxl-6 mx-auto shadow">
                <h2 className="text-center mt-5 text-dark">Choisissez un joueur</h2>
            <div className="row justify-content-center p-4">
                <div className="col-md-4 mt-3">
                    <label htmlFor="player1" className="form-label">Joueur 1 :</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="saisissez un nom"
                        name="player1"
                        value={player1}
                        onChange={(e) => setPlayer1(e.target.value)}
                    />
                    <p className="mt-3">ou</p>
                    <select
                        className="form-select"
                        value={selectedPlayer1}
                        onChange={(e) => setSelectedPlayer1(e.target.value)}
                    >
                        <option value="">Sélectionnez un joueur</option>
                        {uniquePlayer1Names.map((playerName) => (
                            <option key={playerName} value={playerName}>
                                {playerName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4 mt-3">
                    <label htmlFor="player2" className="form-label">Joueur 2 :</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="saisissez un nom"
                        name="player2"
                        value={player2}
                        onChange={(e) => setPlayer2(e.target.value)}
                    />
                    <p className="mt-3">ou</p>
                    <select
                        className="form-select"
                        value={selectedPlayer2}
                        onChange={(e) => setSelectedPlayer2(e.target.value)}
                    >
                        <option value="">Sélectionnez un joueur</option>
                        {uniquePlayer2Names.map((playerName) => (
                            <option key={playerName} value={playerName}>
                                {playerName}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <button type="submit" className="btn" title="Jouer !"><i
                className="bi bi-caret-right-square"></i></button>
            </div>
        </form>
        </div>
    );
};

export { PlayerForm };
