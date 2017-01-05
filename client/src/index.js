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

// TODO: Have modules define their own routes,
// this isn't the place for these actions.
function onBlogRootEnter() {
	store.dispatch( {
		type: 'BLOG_SET_DEFAULT_POST',
	} );
}

function onBlogPostEnter( routeData ) {
	store.dispatch( {
		type: 'BLOG_SET_ACTIVE_POST',
		slug: routeData.params.slug,
	} );
}

function onProjectsRootEnter() {
	store.dispatch( {
		type: 'PROJECTS_SET_DEFAULT',
	} );
}

function onProjectEnter( routeData ) {
	store.dispatch( {
		type: 'PROJECTS_SET_ACTIVE',
		slug: routeData.params.slug,
	} );
}

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
				onEnter: onBlogRootEnter,
			},
			childRoutes: [ {
				component: BlogPageContent,
				path: '/blog/:slug',
				onEnter: onBlogPostEnter,
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
				onEnter: onProjectsRootEnter,
			},
			childRoutes: [ {
				component: ProjectContent,
				path: '/projects/:slug',
				onEnter: onProjectEnter,
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
