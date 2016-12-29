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
			const { total, projects } = action.payload.data;

			return {
				...state,
				total,
				list: projects,
			};
		}
		case PROJECTS_SET_ACTIVE_SLUG:
			return {
				...state,
				activeSlug: action.slug,
			};
		case PROJECTS_ERROR_SET:
			return {
				...state,
				error: {
					message: action.message,
				},
			};
		case PROJECTS_ERROR_CLEAR:
			return {
				...state,
				error: initialState.projectsError,
			};
		default:
			return state;
	}
}
