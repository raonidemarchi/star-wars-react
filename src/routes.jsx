import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

const Home = React.lazy(() => import('./components/Home'))
const Search = React.lazy(() => import('./components/Search'))
const Person = React.lazy(() => import('./components/Person'))

const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={props => <Home {...props} />} />
        <Route path="/search/:query" component={props => <Search {...props} />} />
        <Route path="/person/:id/:name?" component={props => <Person {...props} />} />
        <Redirect from="*" to="/" />
      </Switch>
    </Suspense>
  </Router>
)

export default Routes
