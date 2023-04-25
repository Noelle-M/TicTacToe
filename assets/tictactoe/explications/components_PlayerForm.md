Ce fichier crée un composant ``PlayerForm`` qui permet à l'utilisateur de saisir les noms des 
joueurs ou de sélectionner des joueurs existants pour commencer une partie de Tic Tac Toe. 

Les données des joueurs sont récupérées à partir du ``store Redux`` et les actions sont déclenchées 
en utilisant le hook ``useDispatch``. 

Lorsque le formulaire est soumis, les noms des joueurs sont 
stockés dans le ``localStorage``, 
puis l'application est redirigée vers la page de jeu en utilisant le ``hook useNavigate``.

````js
const finalPlayer1 = player1 || selectedPlayer1;
const finalPlayer2 = player2 || selectedPlayer2;

if (!finalPlayer1 || !finalPlayer2) {
   alert('Veuillez saisir les noms des joueurs ou sélectionner un joueur existant.');
   return;
}
````

Cette partie du code permet de déterminer les noms finaux des joueurs avant de commencer la partie.

``const finalPlayer1 = player1 || selectedPlayer1;`` : Cette ligne assigne la valeur de ``player1`` à 
``finalPlayer1`` si player1 a une valeur (c'est-à-dire que l'utilisateur a saisi un nom dans le champ correspondant). 
Si player1 est vide, la valeur de ``selectedPlayer1`` (le joueur sélectionné dans le menu déroulant) sera utilisée 
à la place.

``const finalPlayer2 = player2 || selectedPlayer2;`` : De même, cette ligne assigne la valeur de player2 à 
``finalPlayer2`` si ``player2`` a une valeur, sinon, elle assigne la valeur de ``selectedPlayer2``.

La condition ``if (!finalPlayer1 || !finalPlayer2)`` vérifie si l'un des deux joueurs n'a pas été défini, 
c'est-à-dire si ``finalPlayer1`` ou ``finalPlayer2`` est vide ou nul. Si c'est le cas, cela signifie que l'utilisateur 
n'a pas saisi de nom et n'a pas non plus sélectionné de joueur existant pour l'un des deux joueurs.

Si la condition est vraie, une alerte est affichée à l'utilisateur pour lui demander de saisir les noms des joueurs 
ou de sélectionner un joueur existant : ``alert('Veuillez saisir les noms des joueurs ou sélectionner un joueur existant.');``.

Enfin, ``return;`` met fin à l'exécution de la fonction ``handleSubmit`` pour éviter d'aller plus loin dans le processus, 
puisque les informations nécessaires pour commencer le jeu sont manquantes.

