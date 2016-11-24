/**
 * External Dependencies
 */
import { LOCATION_CHANGE } from 'react-router-redux';
import { combineReducers } from 'redux';
import { chain, includes } from 'lodash';

/**
 * Internal Dependencies
 */
import contentPaths from 'constants/contentPaths';
import blogReducer from 'state/blog/reducer';
import projectsReducer from 'state/projects/reducer';

const routeInitialState = {
	locationBeforeTransitions: null,
};

function getContentPathSegment( path ) {
	return chain( path )
		.split( '/' )
		.compact()
		.first()
		.value();
}

export function routerReducer( state = routeInitialState, action ) {
	switch ( action.type ) {
		case LOCATION_CHANGE: {
			const newState = {
				...state,
				locationBeforeTransitions: action.payload,
			};
			const contentPath = getContentPathSegment( action.payload.pathname );

			if (
				action.payload.pathname &&
				includes( contentPaths, contentPath )
			) {
				newState.currentContentPath = action.payload.pathname;
			}

			return newState;
		}
		default:
			return state;
	}
}

export default function createReducer( asyncReducers ) {
	return combineReducers( {
		blog: blogReducer,
		routing: routerReducer,
		projects: projectsReducer,
		...asyncReducers,
	} );
}
