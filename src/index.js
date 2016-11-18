import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import App from 'containers/App';
import ExamplePage from 'containers/Example';

const history = new createBrowserHistory();
const rootElement = document.getElementById('root');

ReactDOM.render(
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={ExamplePage} />
            </Route>
        </Router>,
    rootElement
);
