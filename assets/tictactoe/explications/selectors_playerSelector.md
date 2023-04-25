Ce fichier utilise la librairie ``reselect`` pour créer un sélecteur, qui est une fonction qui récupère une 
partie de l'état de l'application et effectue un traitement dessus pour retourner une valeur dérivée.

Le sélecteur créé ici, ``selectPlayers``, récupère l'état du store correspondant aux joueurs (``playerState``), 
puis retourne les joueurs contenus dans cet état.

Il est utile d'utiliser des sélecteurs pour éviter de calculer des valeurs dérivées à chaque fois que 
l'état est modifié, ce qui peut être coûteux en termes de performance. En effet, les sélecteurs sont 
**memoizés**, c'est-à-dire que leur résultat est stocké en mémoire cache et n'est recalculé que si l'état 
sur lequel ils travaillent a changé. Cela permet d'améliorer les performances de l'application en 
évitant des calculs inutiles.

*_Mémoizé_ :

En programmation, la memoization est une technique d'optimisation qui permet de stocker les résultats de 
calculs coûteux afin d'éviter de les recalculer à chaque appel de la fonction. 

La fonction mémorisée 
conserve le résultat de l'appel précédent, ainsi, si elle est appelée plusieurs fois avec les mêmes arguments, 
elle renverra directement le résultat précédemment calculé plutôt que de le recalculer à chaque appel. 

Cette technique est particulièrement utile dans les fonctions qui effectuent des opérations complexes 
et qui sont appelées fréquemment avec les mêmes arguments. La **memoization** permet ainsi d'améliorer les 
performances en évitant les calculs inutiles.