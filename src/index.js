/**
 * External Dependencies
 */
import React from 'react';
import { Router, Route } from 'react-router';
import ReactDOM from 'react-dom';
import CreateBrowserHistory from 'history/lib/createBrowserHistory';

import 'normalize.css';

/**
 * Internal Dependencies
 */
import App from 'containers/App';

import AboutPage from 'containers/AboutPage';
import BlogPage from 'containers/BlogPage';
import ContactPage from 'containers/ContactPage';
import ProjectsPage from 'containers/ProjectsPage';

import 'assets/temp-styles.css';

const history = new CreateBrowserHistory();
const rootElement = document.getElementById( 'root' );

ReactDOM.render(
    <Router history={ history }>
        <Route path="/" component={ App }>
            <Route path="/about" component={ AboutPage } />
            <Route path="/blog" component={ BlogPage } />
            <Route path="/contact" component={ ContactPage } />
            <Route path="/projects" component={ ProjectsPage } />
            <Route path="*" />
        </Route>
    </Router>,
    rootElement
);
