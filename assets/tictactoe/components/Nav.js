// Importation des dépendances React et React Router
import React from 'react';
import { Link } from 'react-router-dom';

// Composant Nav pour afficher la barre de navigation
const Nav = () => {
    return (
        <div className="menu fixed-bottom p-4 bg-dark ">
            <div className="row justify-content-center ">
                {/* Lien vers le tableau des scores */}
                <Link
                    className="btn m-2 btn-menu shadow-lg"
                    title="Tableau des scores"
                    to="/scoreboard"
                >
                    <i className="bi bi-trophy"></i>
                </Link>
                {/* Lien pour revenir au jeu */}
                <Link
                    className="btn m-2 btn-menu shadow-lg"
                    title="Revenir au jeu"
                    to="/tictactoe"
                >
                    <i className="bi bi-arrow-return-left"></i>
                </Link>
                {/* Lien vers l'historique des coups joués */}
                <Link
                    className="btn m-2 btn-menu shadow-lg"
                    title="Historique des coups joués"
                    to="/history"
                >
                    <i className="bi bi-clock-history"></i>
                </Link>
            </div>
        </div>
    );
};

export { Nav };
