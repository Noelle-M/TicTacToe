Ce fichier est responsable de la création d'un store Redux pour gérer l'état global de l'application. 
Un store Redux est un objet qui contient l'état de l'application et fournit des méthodes pour mettre 
à jour cet état et s'y abonner.

La première étape consiste à importer les fonctions nécessaires depuis Redux. Ensuite, on importe le reducer 
``playerReducer`` qui va gérer les actions liées aux joueurs.

Ensuite, on crée un reducer principal en utilisant la fonction ``combineReducers`` de Redux. Cette fonction 
combine plusieurs reducers en un seul. Dans notre cas, nous avons un seul reducer (``playerReducer``), 
mais il est possible d'en avoir plusieurs si nécessaire.

Enfin, on crée le store en utilisant la fonction ``createStore`` de Redux. On lui passe notre reducer principal 
(``rootReducer``) ainsi que l'application du middleware thunk. Le middleware ``thunk`` est utilisé pour gérer les 
actions asynchrones (comme les appels API) dans Redux.

Le store créé peut ensuite être utilisé dans notre application pour stocker et gérer l'état global.