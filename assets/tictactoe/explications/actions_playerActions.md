Ce fichier définit plusieurs action creators pour la gestion des joueurs dans l'application. Les action creators définis dans le fichier sont :

1. addPlayerSuccess: prend les noms des deux joueurs et retourne un objet action avec le type ADD_PLAYER_SUCCESS et les noms des joueurs comme charge utile. Cette action est utilisée pour représenter l'ajout réussi d'un joueur à la liste des joueurs.

2. addPlayerFailure: prend une erreur en entrée et retourne un objet action avec le type ADD_PLAYER_FAILURE et l'erreur comme charge utile. Cette action est utilisée pour représenter l'ajout échoué d'un joueur à la liste des joueurs.

3. fetchPlayersFailure: prend une erreur en entrée et retourne un objet action avec le type FETCH_PLAYERS_FAILURE et l'erreur comme charge utile. Cette action est utilisée pour représenter l'échec de la récupération de la liste des joueurs.

4. fetchPlayersSuccess: prend une liste