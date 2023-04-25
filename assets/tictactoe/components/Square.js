// Import des bibliothèques nécessaires
import React from 'react';
import PropTypes from 'prop-types';

// Création du composant Square sous forme de fonction fléchée
// Square prend trois propriétés : value, onClick et className
const Square = ({ value, onClick, className }) => {
    // Le composant Square retourne un bouton
    // Le bouton a une classe définie par la propriété 'className'
    // et un gestionnaire d'événement 'onClick' pour gérer les clics sur le bouton
    return (
        <button className={className} onClick={onClick}>
            {/* La valeur du bouton est définie par la propriété 'value' */}
            {value}
        </button>
    );
};

// Définition des propTypes pour le composant Square
// Cela sert à valider les types des propriétés passées au composant
Square.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
};

// Export du composant Square
export { Square };
