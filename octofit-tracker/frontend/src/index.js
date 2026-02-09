import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Codespace URL setup
const codespaceName = process.env.REACT_APP_CODESPACE_NAME || window.location.hostname.split('-')[0];
const protocol = window.location.protocol === 'https:' ? 'https' : 'http';
const REACT_APP_CODESPACE_URL = `${protocol}://${codespaceName}-8000.app.github.dev`;
process.env.REACT_APP_CODESPACE_URL = REACT_APP_CODESPACE_URL;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
