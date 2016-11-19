/**
 * External Dependencies
 */
import React from 'react';
import { Router, Route } from 'react-router';
import ReactDOM from 'react-dom';
import CreateBrowserHistory from 'history/lib/createBrowserHistory';

/**
 * Internal Dependencies
 */
import App from 'containers/App';
import ExamplePage from 'containers/Example';

import 'assets/old-styles.css';
import 'assets/temp-styles.css';

const history = new CreateBrowserHistory();
const rootElement = document.getElementById( 'root' );

ReactDOM.render(
    <Router history={ history }>
        <Route path="/" component={ App }>
            <Route path="/example" component={ ExamplePage } />
        </Route>
    </Router>,
    rootElement
);
