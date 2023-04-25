### ``localStorage`` 
est une fonctionnalité du ``Web Storage API`` qui permet de stocker des données sous forme 
de paires clé-valeur directement dans le navigateur de l'utilisateur. Les données stockées dans le ``localStorage`` 
sont persistantes, ce qui signifie qu'elles ne sont pas supprimées lorsque l'utilisateur ferme son navigateur 
et qu'elles restent disponibles lors de futures sessions de navigation.

Le ``localStorage`` est pratique pour stocker des informations qui ne sont pas sensibles, 
comme les préférences de l'utilisateur, les données de formulaire sauvegardées, ou les informations 
d'état d'une application web. Il est important de noter que le ``localStorage`` ne doit pas être utilisé 
pour stocker des données sensibles, telles que les informations d'authentification ou les données personnelles, 
car il est accessible depuis le code ``JavaScript`` côté client et peut être vulnérable à des attaques de type 
``cross-site scripting (XSS)``.

Voici quelques exemples d'utilisation du ``localStorage`` :

Stocker une valeur :
````js
localStorage.setItem('key', 'value');
````
Récupérer une valeur :
````js
const value = localStorage.getItem('key');
````
Supprimer une valeur :
````js
localStorage.removeItem('key');
````
Vider complètement le localStorage :
````js
localStorage.clear();
````
Il est important de noter que les clés et les valeurs dans le ``localStorage`` sont toujours stockées 
sous forme de chaînes de caractères. Si vous devez stocker des objets ou des tableaux, vous devrez 
les convertir en chaînes ``JSON`` à l'aide de ``JSON.stringify()`` avant de les stocker, puis les convertir 
à nouveau en objets ou tableaux à l'aide de ``JSON.parse()`` lors de la récupération.


