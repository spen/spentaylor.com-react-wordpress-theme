/**
 * Internal Dependencies
 */
import { first } from 'lodash';

/**
 * Internal Dependencies
 */
import { POSTS_RECEIVE } from 'state/action-types';
import initialState from './initialState';

export default function( state = initialState, action ) {
	switch ( action.type ) {
		case POSTS_RECEIVE: {
			const { found, posts } = action.payload.data;
			// TODO: only set this when there is either no previous ID
			// or the previous ID is invalid
			const firstPost = first( posts );

			return {
				...state,
				list: posts,
				total: found,
				currentId: firstPost ? firstPost.ID : null,
			};
		}
		default:
			return state;
	}
}
