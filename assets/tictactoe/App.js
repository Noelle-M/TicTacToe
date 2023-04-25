// Import des dépendances
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/index.css";

// Import du magasin Redux
import { playerStore } from "./store/playerStore";

// Import des composants
import { PlayerForm } from "./components/PlayerForm";

// Définition du composant racine
const App = () => {
    return (
        <Provider store={playerStore}>
            <BrowserRouter>
                <PlayerForm />
            </BrowserRouter>
        </Provider>
    );
};

// Rendu du composant racine dans le DOM
createRoot(document.getElementById("rootApp")).render(<App />);
