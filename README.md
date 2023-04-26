# TicTacToe
React Symfony

Pour installer TicTacToe :

require "php": ">=8.1",
````
HTTPS
git clone https://github.com/Noelle-M/TicTacToe.git

ou

SSH
git clone git@github.com:Noelle-M/TicTacToe.git
````
### Pour lancer TicTacToe
````
npm install
composer install
symfony console doctrine:database:create
symfony console make:migration
symfony console d:m:m

symfony serve -d
npm run dev -- --watch
````
``symfony console`` suppose que vous avez installé le ``cli``, sinon remplacer par ``php bin/console``
Appli installée et accessible sur votre serveur local : http://127.0.0.1:8000/


# tuto-React-morpion

Intégrer l’appli React dans une application symfony

### Créer une API REST :
1. L'api doit suivre la structure REST (https://restfulapi.net/) et être au format JSON
2. Pouvoir créer son joueur en début de partie, ou re-sélectionner un joueur existant
3. Pouvoir savoir le nombre de partie disputée ainsi que le nombre de partie gagnée pour chaque joueur
4. Pouvoir savoir la date de dernière activité d'un joueur

### Mettre à jour l’UI :
1. Afficher le tableau des scores des joueurs dans une nouvelle vue (avec une route)

### Prérequis techniques : 
1. Avoir au moins 1 manager pour contenir la logique métier
2. Ecouter un event symfony
3. Désactiver l’autowiring et l’autoconfigure

![2023-04-24_11h43_19](https://user-images.githubusercontent.com/43520762/234223692-0985e443-d154-4128-817b-37ea7575ebbe.gif)
