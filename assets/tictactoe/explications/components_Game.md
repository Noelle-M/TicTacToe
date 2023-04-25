
Ce code définit un composant React appelé `Game` qui gère l'affichage et la logique du jeu. Le composant utilise Redux pour gérer l'état global et le hook `useNavigate` pour la navigation. Il récupère également les noms des joueurs à partir du stockage local et gère l'affichage du plateau de jeu, des messages de fin de partie et de l'overlay de fin de partie.

Voici un résumé des principales parties du code :

1. Les données du store Redux sont sélectionnées et utilisées pour déterminer l'état du jeu, y compris l'historique des mouvements, le nombre d'étapes, le joueur actuel et le gagnant éventuel.
2. Le composant utilise l'état local pour stocker les noms des joueurs récupérés à partir du stockage local.
3. Le hook `useEffect` est utilisé pour vérifier si les noms des joueurs sont stockés dans le stockage local et rediriger vers la page d'accueil si le formulaire n'a pas été rempli.
4. La fonction `finishGame` enregistre le gagnant de la partie en envoyant une requête POST à l'API `/api/game/finish`.
5. Le code gère l'affichage du message de fin de partie, de l'overlay de fin de partie et des confettis en fonction de l'état du jeu.
6. Le composant `Board` est utilisé pour afficher le plateau de jeu et gérer les interactions avec les cases.

En résumé, ce code crée un composant React qui gère l'affichage et la logique d'un jeu, en utilisant Redux pour gérer l'état global, le stockage local pour récupérer les noms des joueurs et la navigation pour rediriger vers la page d'accueil si nécessaire.
