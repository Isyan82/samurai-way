import React from 'react';
import ReactDOM from 'react-dom/client';
import state from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import { addPost, updateNewPostText, subcribe } from './redux/state';
import './index.css';


// Упаковываем render в функцию, которая будет вызываться при каждом изменении в IU
const root = ReactDOM.createRoot(document.getElementById('root'));
let rerendetEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
            </BrowserRouter>
        </React.StrictMode>
    );
}


rerendetEntireTree(state)
subcribe(rerendetEntireTree)