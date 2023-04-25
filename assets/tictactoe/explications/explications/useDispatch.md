### ``useDispatch``
Est un hook personnalisé fourni par la bibliothèque React-Redux.
Il permet d'accéder au "dispatch" du store Redux dans un composant fonctionnel React.
Le "dispatch" est utilisé pour envoyer des actions au store Redux, qui met ensuite à jour
l'état de l'application en fonction des actions et des réducteurs définis.

Lorsque vous utilisez useDispatch, vous obtenez une référence à la fonction dispatch du
store Redux. Vous pouvez ensuite l'utiliser pour envoyer des actions à votre store.
Cette approche simplifie la gestion de l'état dans une application React en combinant les hooks et Redux.

Voici un exemple d'utilisation de useDispatch :
````js
import React from 'react';
import { useDispatch } from 'react-redux';
import { someAction } from '../actions/someAction';

const MyComponent = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // Lorsque l'utilisateur clique sur le bouton, l'action "someAction" est envoyée au store Redux
    dispatch(someAction());
  };

  return (
    <button onClick={handleClick}>
      Cliquez ici
    </button>
  );
};
````
Dans cet exemple, le hook useDispatch est importé et utilisé pour obtenir la fonction dispatch du store Redux.
Ensuite, un gestionnaire d'événements handleClick est défini pour envoyer l'action someAction au store lorsque
l'utilisateur clique sur le bouton.