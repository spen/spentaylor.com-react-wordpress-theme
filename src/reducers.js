/**
 * External Dependencies
 */
import { LOCATION_CHANGE } from 'react-router-redux';
import { combineReducers } from 'redux';

/**
 * Internal Dependencies
 */
import contentPaths from 'constants/contentPaths';
import projectsReducer from 'state/projects/reducer';

const routeInitialState = {
	locationBeforeTransitions: null,
};

export function routerReducer( state = routeInitialState, action ) {
	switch ( action.type ) {
		case LOCATION_CHANGE: {
			const newState = {
				...state,
				locationBeforeTransitions: action.payload,
			};

			if (
				action.payload.pathname &&
				contentPaths.indexOf( action.payload.pathname ) !== -1
			) {
				newState.previousContentPath = action.payload.pathname;
			}

			return newState;
		}
		default:
			return state;
	}
}

export default function createReducer( asyncReducers ) {
	return combineReducers( {
		routing: routerReducer,
		projects: projectsReducer,
		...asyncReducers,
	} );
}
