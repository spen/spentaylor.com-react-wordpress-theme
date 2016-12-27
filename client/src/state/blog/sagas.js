/**
 * External Dependencies
 */
import { first, isEmpty } from 'lodash';
import { push } from 'react-router-redux';
import { call, put, select, take } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';

/**
 * Internal Dependencies
 */
import { SITE_URL } from 'constants/wp';
import {
	BLOG_POSTS_FETCH,
	BLOG_SET_ACTIVE_POST,
} from 'state/action-types';
import request from 'utils/request';
import {
	setNextContentPath,
	setPreviousContentPath,
} from 'state/routing/actions';
import {
	clearPostsError,
	recievePosts,
	setActivePostSlug,
	setPostsError,
} from './actions';
import {
	getActivePostSlug,
	getNextPostSlug,
	getPostBySlug,
	getPosts,
	getPostsError,
	getPreviousPostSlug,
} from './selectors';

export function* fetchPosts() {
	const requestURL = 'http://public-api.wordpress.com/rest/v1.1/sites/' +
		SITE_URL + '/posts?callback=?';
	const response = yield call( request, requestURL );

	if ( ! response.err ) {
		yield put( recievePosts( response ) );
	} else {
		yield put( setPostsError( 'Something went wrong while connecting to wordpress :(' ) );
	}
}

export function* setActivePost( action ) {
	const { slug } = action;
	const posts = yield select( getPosts );

	yield put( clearPostsError() );

	// TODO: handle cases where there are still no posts, this assumes
	// that fetching posts always successfully returns a number of posts.
	if ( isEmpty( posts ) ) {
		yield call( fetchPosts );
	}

	const error = yield select( getPostsError );

	if ( ! isEmpty( error ) ) {
		return;
	}

	const matchedPost = yield select( getPostBySlug, slug );

	if ( matchedPost ) {
		yield put( setActivePostSlug( matchedPost.slug ) );
		const nextPostSlug = yield select( getNextPostSlug );
		const previousPostSlug = yield select( getPreviousPostSlug );
		const nextPath = nextPostSlug ? `/blog/${ nextPostSlug }` : null;
		const previousPath = previousPostSlug ? `/blog/${ previousPostSlug }` : null;
		yield put( setNextContentPath( nextPath ) );
		yield put( setPreviousContentPath( previousPath ) );
	} else {
		yield put( setPostsError( `Oh no! No post found matching: "${ slug }". :(` ) );
		yield put( setActivePostSlug( null ) );
	}
}

export function* setDefaultPost( ) {
	let posts = yield select( getPosts );

	// TODO: handle cases where there are still no posts, this assumes
	// that fetching posts always successfully returns a number of posts.
	if ( isEmpty( posts ) ) {
		yield call( fetchPosts );
	}

	const error = yield select( getPostsError );

	if ( ! isEmpty( error ) ) {
		return;
	}

	const activePostSlug = yield select( getActivePostSlug );
	let targetSlug;

	if ( activePostSlug ) {
		targetSlug = activePostSlug;
	} else {
		posts = yield select( getPosts );
		const firstPost = yield call( first, posts );
		targetSlug = firstPost.slug;
	}
	const url = `/blog/${ targetSlug }`;

	yield put( push( url ) );
}

export function* setActivePostWatcher() {
	yield takeEvery( BLOG_SET_ACTIVE_POST, setActivePost );
}

export function* setDefaultPostWatcher() {
	yield takeEvery( 'BLOG_SET_DEFAULT_POST', setDefaultPost );
}

export function* fetchPostsWatcher() {
	while ( yield take( BLOG_POSTS_FETCH ) ) {
		yield call( fetchPosts );
	}
}

export default [
	fetchPostsWatcher,
	setActivePostWatcher,
	setDefaultPostWatcher,
];
