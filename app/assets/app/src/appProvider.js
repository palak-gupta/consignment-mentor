import ReactDOM from 'react-dom/client';
import React from 'react';

const m = document.createElement('div');
document.body.appendChild(m);
const root = ReactDOM.createRoot(
    m
);

root.render(<h1>
    Hello World
</h1>)

