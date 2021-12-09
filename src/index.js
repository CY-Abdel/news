import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// IMPORTER LE CSS (CODER AVC SASS)
import "./styles/index.scss";
// import './index.css';

ReactDOM.render(
  // eviter les bugs et erreurs avex el strict mode
  <React.StrictMode>
    {/* ajouter tout les composants de App.js dans la page index.htlm */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);