// Import des dépendances
import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';

// Import des composants
import { Nav } from './components/Nav';
import { Game } from './components/Game';
import { ScoreBoard } from './components/ScoreBoard';
import { ConnectedHistoryView as HistoryView } from './components/HistoryView';

// Import du magasin Redux
import { gameStore } from './store/gameStore';

// Définition du composant racine
const App = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/tictactoe" element={<Game />} />
                <Route path="/history" element={<HistoryView />} />
                <Route path="/scoreboard" element={<ScoreBoard />} />
            </Routes>
        </Router>
    );
};

// Enveloppement du composant racine dans le composant Provider de Redux
const WrappedApp = () => {
    return (
        <Provider store={gameStore}>
            <App />
        </Provider>
    );
}

// Rendu du composant WrappedApp dans le DOM
window.onload = function() {
    createRoot(document.getElementById('rootGame')).render(<WrappedApp />);
}
