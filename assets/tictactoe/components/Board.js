// Import de React, PropTypes et Square
import React from 'react';
import PropTypes from 'prop-types';
import { Square } from './Square';

// Composant de classe Board
class Board extends React.Component {

    // Fonction pour afficher un carré
    renderSquare(i) {
        let className = "square";
        if (Array.isArray(this.props.winner) && this.props.winner.indexOf(i) !== -1) {
            className += " winner";
        }
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                className={className}
                key={i}
            />
        );
    }

    // Fonction de rendu du plateau de jeu
    render() {
        return (
            <div className="plateau mx-auto">
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

// Validation des props du composant Board
Board.propTypes = {
    squares: PropTypes.arrayOf(PropTypes.string).isRequired, // Tableau de chaînes de caractères représentant les valeurs des carrés
    onClick: PropTypes.func.isRequired, // Fonction de rappel pour la gestion des événements de clic sur les carrés
    winner: PropTypes.array, // Tableau représentant les indices des carrés gagnants
};

// Export du composant Board
export { Board };
