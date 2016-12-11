/**
 * External Dependencies
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'normalize.css';

/**
 * Internal Dependencies
 */
import App from 'containers/App';

import AboutPage from 'containers/AboutPage';
import BlogPage from 'containers/BlogPage';
import BlogPageContent from 'containers/BlogPage/Content';
import ContactPage from 'containers/ContactPage';
import ProjectsPage from 'containers/ProjectsPage';
import ProjectContent from 'containers/ProjectsPage/Content';
import configureStore from './store';

import 'assets/temp-styles.css';

const store = configureStore( {}, hashHistory );
const history = syncHistoryWithStore( hashHistory, store );

// TODO: Have modules define their own routes,
// this isn't the place for these actions.
function onBlogRootEnter() {
	store.dispatch( {
		type: 'BLOG_SET_DEFAULT_POST',
	} );
}

function onBlogRootLeave() {
	store.dispatch( {
		type: 'ROUTING_CLEAR_PREVIOUS_AND_NEXT',
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

function onProjectsRootLeave() {
	store.dispatch( {
		type: 'ROUTING_CLEAR_PREVIOUS_AND_NEXT',
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

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ history }>
			<Route path="/" component={ App } onEnter={ resetTitle }>
				<IndexRoute onEnter={ resetTitle } />
				<Route path="/about" component={ AboutPage } />
				<Route path="/blog" component={ BlogPage } onLeave={ onBlogRootLeave } >
					<IndexRoute component={ BlogPageContent } onEnter={ onBlogRootEnter } />
					<Route
						component={ BlogPageContent }
						path="/blog/:slug"
						onEnter={ onBlogPostEnter }
					/>
				</Route>
				<Route path="/contact" component={ ContactPage } />
				<Route path="/projects" component={ ProjectsPage } onLeave={ onProjectsRootLeave } >
					<IndexRoute component={ ProjectContent } onEnter={ onProjectsRootEnter } />
					<Route
						component={ ProjectContent }
						path="/projects/:slug"
						onEnter={ onProjectEnter }
					/>
				</Route>
				<Route path="*" />
			</Route>
		</Router>
	</Provider>,
	rootElement
);
