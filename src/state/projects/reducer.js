/**
 * Internal Dependencies
 */
import {
	PROJECTS_ERROR_CLEAR,
	PROJECTS_ERROR_SET,
	PROJECTS_RECEIVE,
	PROJECTS_SET_ACTIVE_SLUG,
} from 'state/action-types';
import initialState from './initialState';

export default function( state = initialState, action ) {
	switch ( action.type ) {
		case PROJECTS_RECEIVE: {
			const { found, posts } = action.payload.data;

			return {
				...state,
				list: posts,
				total: found,
			};
		}
		case PROJECTS_SET_ACTIVE_SLUG:
			return {
				...state,
				activeProjectSlug: action.slug,
			};
		case PROJECTS_ERROR_SET:
			return {
				...state,
				projectsError: {
					message: action.message,
				},
			};
		case PROJECTS_ERROR_CLEAR:
			return {
				...state,
				projectsError: initialState.projectsError,
			};
		default:
			return state;
	}
}
