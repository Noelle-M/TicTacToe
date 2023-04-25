Ce code définit un composant ``Square``, qui représente un bouton pour un élément de la grille du jeu 
(dans ce cas, un carré d'un jeu de morpion). Le composant prend trois propriétés (props) :

1. ``value`` : La valeur à afficher dans le bouton (généralement "X", "O" ou null pour un carré vide).
2. ``onClick`` : Un gestionnaire de clics pour gérer l'action à effectuer lorsqu'un utilisateur clique sur le bouton.
3. ``className`` : Une chaîne de caractères pour définir la classe CSS à appliquer au bouton.

Le composant utilise ``PropTypes`` pour valider les types des propriétés passées, garantissant ainsi que les 
types de données attendus sont utilisés lors de l'utilisation du composant. Enfin, le composant ``Square`` est 
exporté pour être utilisé dans d'autres parties de l'application.