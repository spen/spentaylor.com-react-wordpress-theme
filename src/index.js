/*
 * External Dependencies
 */
import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';

/*
 * Internal Dependencies
 */
import App from 'containers/App';
import ExamplePage from 'containers/Example';

import 'assets/old-styles.css';

const history = new createBrowserHistory();
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Router history={ history }>
        <Route path="/" component={ App }>
            <Route path="/example" component={ ExamplePage } />
        </Route>
    </Router>,
    rootElement
);
