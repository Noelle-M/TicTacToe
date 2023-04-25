import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeMove, resetGame } from '../actions/gameActions';
import { useNavigate } from 'react-router-dom';
import { Board } from './Board';
import Confetti from 'react-confetti';
import { selectHistory, selectStepNumber, selectXIsNext, selectWinner } from '../selectors/indexSelector';

const Game = () => {
    // Sélection des données du store à utiliser
    const history = useSelector(selectHistory);
    const stepNumber = useSelector(selectStepNumber);
    const xIsNext = useSelector(selectXIsNext);
    const winner = useSelector(selectWinner);

    const dispatch = useDispatch();
    const handleResetGame = () => {
        dispatch(resetGame());
    };

    // État local pour stocker les noms des joueurs
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');

    // Hook de navigation pour rediriger vers la page d'accueil si le formulaire n'a pas été rempli
    const navigate = useNavigate();

    useEffect(() => {
        const isFormValid = localStorage.getItem('isFormValid');
        const storedPlayer1 = localStorage.getItem('player1');
        const storedPlayer2 = localStorage.getItem('player2');

        // Récupération des noms des joueurs dans le local storage si le formulaire a été rempli
        if (isFormValid === 'true' && storedPlayer1 && storedPlayer2) {
            setPlayer1(storedPlayer1);
            setPlayer2(storedPlayer2);
        } else {
            window.location.href = '/';
        }
    }, [navigate]);

    const { squares } = history[stepNumber];

    // Fonction pour enregistrer le gagnant de la partie
    const finishGame = (winnerName, loserName) => {
        fetch('/api/player/finish', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ winner: winnerName, loser: loserName }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    console.log('Game finished successfully');
                } else {
                    console.error('Failed to finish game', data);
                    console.log('Winner:', winnerName, 'Loser:', loserName);
                }
            });
    };

    let status;

    // Affichage du message de fin de partie et appel de la fonction finishGame
    if (winner) {
        let gagnant = squares[winner[0]];
        if (gagnant === "X") {
            status = player1 + ' gagne la partie !';
            finishGame(player1, player2);
        } else {
            status = player2 + ' gagne la partie !';
            finishGame(player2, player1);
        }
    } else {
        status = 'Prochain joueur : ' + (xIsNext ? player1 : player2);
    }

    // Style pour l'overlay de fin de partie
    const overlayStyle = winner
        ? {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "center",
            alignItems: "zIndex: 100",
        }
        : { display: "none" };

    // Affichage des confettis si la partie est terminée
    const showConfetti = winner !== null;

    function resetLocalStorage() {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <Fragment>
            {/* Overlay de fin de partie */}
            {showConfetti && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    numberOfPieces={500}
                />
            )}
            <div style={overlayStyle}>
                <h1 className="h1-winner">{status}</h1>
                <br />
                <button onClick={handleResetGame} className="refresh">
                    Recommencer
                </button>
            </div>

            {/* Affichage du plateau de jeu */}
            <div className="container">
                <div className="menu fixed-top p-4 bg-dark">
                    <div className="row justify-content-center ">
                        <p className="col-6 text-center joueurs"><span>{player1}</span> joue X</p>
                        <p className="col-6 text-center joueurs"><span>{player2}</span> joue O</p>
                    </div>
                    <button className="btn" onClick={resetLocalStorage}>
                        <i className="bi bi-x-circle" title="Annuler la partie"></i>
                    </button>
                </div>
                <div className="board row justify-content-center mx-auto">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 text-center">
                        <Board
                            squares={history[stepNumber].squares}
                            onClick={(i) => dispatch(makeMove(i))}
                            winner={winner}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export { Game };
