import ReactDOM from 'react-dom/client';
import React from 'react';
import App from 'src/App';

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);
const root = ReactDOM.createRoot(rootElement);

root.render(<div>
    <App />
</div>)

