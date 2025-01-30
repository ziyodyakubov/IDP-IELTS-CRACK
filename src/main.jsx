import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Root from './routes';

const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <Root />
        </React.StrictMode>
    );
} else {
    console.error("Root element not found! Check your index.html file.");
}
