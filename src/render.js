import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

import { addPost } from './redux/state';
import './index.css';
import { BrowserRouter } from 'react-router-dom';


// Упаковываем render в функцию, которая будет вызываться при каждом изменении в IU
let rerendetEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default rerendetEntireTree