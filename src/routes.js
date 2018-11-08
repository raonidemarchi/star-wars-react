import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Search from './components/Search';
import Person from './components/Person';

const Routes = () => {
    return <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search/:query" component={Search} />
        <Route path="/person/:id" component={Person} />
        <Redirect from="*" to="/" />
    </Switch>
}

export default Routes;