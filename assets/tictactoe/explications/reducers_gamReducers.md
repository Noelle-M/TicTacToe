``gameReducers.js`` est un ``réducteur`` Redux qui gère l'état du jeu, notamment 
l'historique des coups, le compteur de coups, le prochain joueur, et le gagnant de la partie.

### Initial State : 
L'état initial du jeu est défini avec les propriétés suivantes :

``history`` : Un tableau contenant un objet avec un tableau de 9 cases remplies de ``null``, 
représentant l'état initial du plateau de jeu.

``stepNumber`` : Un compteur de coups initialisé à 0.

``xIsNext`` : Un booléen indiquant si le joueur "X" doit jouer le prochain coup (initialisé à true).

``winner`` : Une variable initialisée à ``null``, représentant l'absence de gagnant au début du jeu.

``gameReducers`` function : La fonction gameReducers prend en entrée l'état actuel du jeu et une 
action, puis retourne un nouvel état en fonction du type d'action.

### Actions : Les actions possibles sont

``MAKE_MOVE`` : Cette action est déclenchée lorsqu'un joueur clique sur une case du plateau de jeu. 
Si la case est déjà occupée ou si un gagnant a déjà été déterminé, l'état reste inchangé. Sinon, 
le réducteur met à jour l'état en ajoutant un nouvel objet à l'historique, en incrémentant le compteur de coups, 
en alternant le joueur suivant et en mettant à jour le gagnant si nécessaire.

``JUMP_TO`` : Cette action est déclenchée lorsqu'un joueur souhaite revenir à un coup précédent. Le réducteur met à 
jour l'état en modifiant le compteur de coups et en alternant le joueur suivant en fonction du nombre de coups.

``RESET_GAME`` : Cette action est déclenchée lorsqu'un joueur souhaite réinitialiser le jeu. Le réducteur réinitialise 
l'état à sa valeur initiale.

``default`` : Si aucune des actions ci-dessus ne correspond, l'état reste inchangé.

``calculateWinner`` function : La fonction ``calculateWinner`` prend en entrée le tableau des cases et vérifie s'il y a un 
gagnant en comparant les valeurs des cases avec les combinaisons gagnantes possibles. 
Si une combinaison gagnante est trouvée, la fonction retourne la ligne gagnante, sinon elle retourne ``null``.

Le réducteur exporté, ``gameReducers``, est utilisé pour gérer l'état du jeu dans l'application, en collaboration avec 
le store Redux et les autres réducteurs.
