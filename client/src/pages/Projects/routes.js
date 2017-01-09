/**
 * Internal Dependencies
 */
import Page from './index';
import Content from './Content';

export default [ {
	path: '/projects',
	name: 'projects',
	component: Page,
	childRoutes: [ {
		component: Content,
		path: '/projects/:slug',
	} ],
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
} ];
