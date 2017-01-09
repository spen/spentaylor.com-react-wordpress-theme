/**
 * Internal Dependencies
 */
import Page from './index';
import Content from './Content';

export default [ {
	path: '/blog',
	component: Page,
	indexRoute: {
		component: Content,
	},
	childRoutes: [ {
		component: Content,
		path: '/blog/:slug',
	} ],
} ];
