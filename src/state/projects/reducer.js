/**
 * Internal Dependencies
 */
import { first } from 'lodash';

/**
 * Internal Dependencies
 */
import { PROJECTS_RECEIVE } from 'state/action-types';
import initialState from './initialState';

export default function( state = initialState, action ) {
	switch ( action.type ) {
		case PROJECTS_RECEIVE: {
			const { found, posts } = action.payload.data;

			return {
				...state,
				list: posts,
				total: found,
				// TODO: only set this when there is either no previous ID
				// or the previous ID is invalid
				currentId: first( posts ).ID,
			};
		}
		default:
			return state;
	}
}
