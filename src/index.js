/**
 * External Dependencies
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Route, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'normalize.css';

/**
 * Internal Dependencies
 */
import App from 'containers/App';

import AboutPage from 'containers/AboutPage';
import BlogPage from 'containers/BlogPage';
import ContactPage from 'containers/ContactPage';
import ProjectsPage from 'containers/ProjectsPage';
import configureStore from './store';

import 'assets/temp-styles.css';

const store = configureStore( {}, browserHistory );
const history = syncHistoryWithStore( browserHistory, store );

const rootElement = document.getElementById( 'root' );

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ history }>
			<Route path="/" component={ App }>
				<Route path="/about" component={ AboutPage } />
				<Route path="/blog(/:slug)" component={ BlogPage } />
				<Route path="/contact" component={ ContactPage } />
				<Route path="/projects" component={ ProjectsPage } />
				<Route path="*" />
			</Route>
		</Router>
	</Provider>,
	rootElement
);
