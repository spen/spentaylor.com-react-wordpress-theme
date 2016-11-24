/**
 * External Dependencies
 */
import { call, put, take } from 'redux-saga/effects';

/**
 * Internal Dependencies
 */
import { recievePosts } from './actions';
import { SITE_URL } from 'constants/wp';
import { BLOG_POSTS_FETCH } from 'state/action-types';
import request from 'utils/request';

export function* getPosts() {
	const requestURL = 'http://public-api.wordpress.com/rest/v1.1/sites/' +
		SITE_URL + '/posts?callback=?';
	const response = yield call( request, requestURL );

	if ( ! response.err ) {
		yield put( recievePosts( response ) );
	} else {
		// TODO: 'put' failed action
	}
}

export function* getPostsWatcher() {
	while ( yield take( BLOG_POSTS_FETCH ) ) {
		yield call( getPosts );
	}
}

export default [
	getPostsWatcher,
];
