import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/styles.css';

import icon from './img/favicon.ico';

const App = () => {
    return <BrowserRouter>
        <Routes />
    </BrowserRouter>
}

// favicon
let newLink  = document.createElement('link');
newLink.rel  = 'shortcut icon';
newLink.href = icon;
document.querySelector('head').appendChild(newLink);

ReactDOM.render(<App />, document.getElementById('app'));