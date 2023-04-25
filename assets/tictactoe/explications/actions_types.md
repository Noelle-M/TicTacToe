Ce fichier définit les différents types d'actions qui peuvent être utilisés dans l'application. Les types d'action sont des chaînes de caractères qui décrivent l'action à effectuer.

Dans ce fichier, les types d'action définis sont :

1. MAKE_MOVE: utilisé pour représenter un mouvement dans le jeu Tic Tac Toe. 
2. JUMP_TO: utilisé pour représenter le fait de sauter à un état spécifique dans l'historique des mouvements. 
3. RESET_GAME: utilisé pour représenter le fait de réinitialiser le jeu.

4. ADD_PLAYER1: utilisé pour représenter le fait d'ajouter un joueur 1 à l'application. 
5. ADD_PLAYER2: utilisé pour représenter le fait d'ajouter un joueur 2 à l'application. 
6. ADD_PLAYER_SUCCESS: utilisé pour représenter l'ajout réussi d'un joueur à la liste des joueurs. 
7. ADD_PLAYER_FAILURE: utilisé pour représenter l'ajout échoué d'un joueur à la liste des joueurs. 
8. FETCH_PLAYERS_SUCCESS: utilisé pour représenter la récupération réussie de la liste des joueurs. 
9. FETCH_PLAYERS_FAILURE: utilisé pour représenter l'échec de la récupération de la liste des joueurs. 
10. FETCH_PLAYERS_REQUEST: utilisé pour représenter la requête de récupération de la liste des joueurs.

Ces types d'action sont utilisés dans les action creators et les reducers pour s'assurer que chaque action est correctement identifiée et traitée.