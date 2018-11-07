import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Search from './components/Search';

const Routes = () => {
    return <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search/:query" component={Search} />
    </Switch>
}

export default Routes;