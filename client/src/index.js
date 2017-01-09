/**
 * External Dependencies
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'normalize.css';

/**
 * Internal Dependencies
 */
import App from 'containers/App';
import configureStore from './store';
import aboutRoutes from 'pages/About/routes';
import blogRoutes from 'pages/Blog/routes';
import contactRoutes from 'pages/Contact/routes';
import projectRoutes from 'pages/Projects/routes';

import 'assets/temp-styles.css';

const store = configureStore( {}, browserHistory );
const history = syncHistoryWithStore( browserHistory, store );

const originalTitle = document.title;

function resetTitle() {
	// Nasty little hack :/
	window.setTimeout( () => document.title = originalTitle, 0 );
}

const rootElement = document.getElementById( 'root' );
const routes = {
	component: App,
	childRoutes: [
		{
			path: '/',
			onEnter: resetTitle,
		},
		...aboutRoutes,
		...blogRoutes,
		...contactRoutes,
		...projectRoutes,
		{
			path: '*',
			// TODO: NoPage route
		},
	],
};

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ history } routes={ routes } />
	</Provider>,
	rootElement
);
