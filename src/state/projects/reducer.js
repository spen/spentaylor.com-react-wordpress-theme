/**
 * Internal Dependencies
 */
import { PROJECTS_RECEIVE } from 'state/action-types';
import initialState from './initialState';

export default function( state = initialState, action ) {
	switch ( action.type ) {
		case PROJECTS_RECEIVE: {
			const { found, posts } = action.payload;

			return {
				...state,
				total: found,
				posts,
			};
		}
		default:
			return state;
	}
}
