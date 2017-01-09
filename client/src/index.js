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
import AboutPage from 'pages/About';
import BlogPage from 'pages/Blog';
import BlogPageContent from 'pages/Blog/Content';
import ContactPage from 'pages/Contact';
import ProjectsPage from 'pages/Projects';
import ProjectContent from 'pages/Projects/Content';
import configureStore from './store';

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
		{
			path: '/about',
			component: AboutPage,
		},
		{
			path: '/blog',
			component: BlogPage,
			indexRoute: {
				component: BlogPageContent,
			},
			childRoutes: [ {
				component: BlogPageContent,
				path: '/blog/:slug',
			} ],
		},
		{
			path: '/contact',
			component: ContactPage,
		},
		{
			// <Redirect from="/portfolio" to="/projects" />
			path: '/portfolio',
			onEnter: ( nextState, replace, next ) => {
				replace( '/projects' );
				next();
			},
		},
		{
			// <Redirect from="/portfolio/:slug" to="/projects/:slug" />
			path: '/portfolio/:slug',
			onEnter: ( nextState, replace, next ) => {
				replace( '/projects/' + nextState.params.slug );
				next();
			},
		},
		{
			path: '/projects',
			component: ProjectsPage,
			indexRoute: {
				component: ProjectContent,
			},
			childRoutes: [ {
				component: ProjectContent,
				path: '/projects/:slug',
			} ],
		},
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
