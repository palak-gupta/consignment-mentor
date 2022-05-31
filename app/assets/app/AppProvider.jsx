import ReactDOM from 'react-dom/client';
import React from 'react';
import App from 'app/App';
import './global.scss';
const rootElement = document.createElement('div');
document.body.appendChild(rootElement);
rootElement.className="root"
const root = ReactDOM.createRoot(rootElement);

root.render(<App />)

