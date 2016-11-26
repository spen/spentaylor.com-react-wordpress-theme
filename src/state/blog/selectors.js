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

export function getActivePostSlug( state ) {
	return get( state, 'blog.activePostSlug' );
}

export function getActivePost( state ) {
	const posts = getPosts( state );
	const activePostSlug = getActivePostSlug( state );

	if ( ! posts || ! activePostSlug ) {
		return null;
	}

	return getPostBySlug( state, activePostSlug );
}
