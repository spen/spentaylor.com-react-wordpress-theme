/**
 * External Dependencies
 */
import { find, get } from 'lodash';

export function getPosts( state ) {
	return get( state, 'blog.list' );
}

export function getPostBySlug( state, slug ) {
	const posts = getPosts( state );

	if ( ! posts || ! slug ) {
		return null;
	}

	return find( posts, { slug } );
}

export function getPostById( state, id ) {
	const posts = getPosts( state );

	if ( ! posts || ! id ) {
		return null;
	}

	return find( posts, { ID: id } );
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

	return getPostById( state, currentId );
}
