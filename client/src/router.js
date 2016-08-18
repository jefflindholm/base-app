import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './app';
import Role from './components/role';
import Login from './components/login';
import store from './store';

const history = syncHistoryWithStore(browserHistory, store);
const routes = (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Role} />
            <Route path="/login" component={Login} />
        </Route>
    </Router>
);
export default routes;
