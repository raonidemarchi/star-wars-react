import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Search from './components/Search';
import Home from './components/Home';

const Routes = () => {
    return <BrowserRouter>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
            </ul>

            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
        </div>
    </BrowserRouter>
}

ReactDOM.render(<Routes />, document.getElementById('index'));