/**
 * External Dependencies
 */
import { find, get } from 'lodash';

export function getPosts( state ) {
	return get( state, 'blog.list' );
}

export function getCurrentPostId( state ) {
	return get( state, 'blog.currentId' );
}

export function getCurrentPost( state ) {
	const posts = getPosts( state );
	const currentId = getCurrentPostId( state );

	if ( ! posts || ! currentId ) {
		return null;
	}

	return find( posts, { ID: currentId } );
}
