/**
 * External Dependencies
 */
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

/**
 * Internal Dependencies
 */
import blogReducer from 'state/blog/reducer';
import projectsReducer from 'state/projects/reducer';
import routingReducer from 'state/routing/reducer';

export default function createReducer( asyncReducers ) {
	return combineReducers( {
		blog: blogReducer,
		routing: routingReducer,
		projects: projectsReducer,
		form: reduxFormReducer,
		...asyncReducers,
	} );
}
