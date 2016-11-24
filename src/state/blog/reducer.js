/**
 * Internal Dependencies
 */
import { first } from 'lodash';

/**
 * Internal Dependencies
 */
import {
	BLOG_POSTS_RECEIVE,
	BLOG_SET_CURRENT_SLUG,
	BLOG_SET_DEFAULT_SLUG,
} from 'state/action-types';
import initialState from './initialState';

export default function( state = initialState, action ) {
	switch ( action.type ) {
		case BLOG_POSTS_RECEIVE: {
			const { found, posts } = action.payload.data;

			return {
				...state,
				list: posts,
				total: found,
			};
		}
		case BLOG_SET_CURRENT_SLUG:
			return {
				...state,
				currentPostSlug: action.slug,
			};
		case BLOG_SET_DEFAULT_SLUG: {
			const posts = action.posts;
			const post = posts && posts.length
				? first( posts )
				: null;
			const slug = post ? post.slug : null;

			return {
				...state,
				currentPostSlug: slug,
			};
		}
		default:
			return state;
	}
}
