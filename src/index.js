/**
 * External Dependencies
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
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

const rootElement = document.getElementById( 'root' );

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ history }>
			<Route path="/" component={ App }>
				<Route path="/about" component={ AboutPage } />
				<Route path="/blog" component={ BlogPage } onLeave={ onBlogRootLeave } >
					<IndexRoute component={ BlogPageContent } onEnter={ onBlogRootEnter } />
					<Route
						path="/blog/:slug"
						component={ BlogPageContent }
						onEnter={ onBlogPostEnter }
					/>
				</Route>
				<Route path="/contact" component={ ContactPage } />
				<Route path="/projects" component={ ProjectsPage } />
				<Route path="*" />
			</Route>
		</Router>
	</Provider>,
	rootElement
);
