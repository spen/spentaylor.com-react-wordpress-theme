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
import {
	BLOG_POSTS_FETCH,
	BLOG_SET_ACTIVE_POST,
	BLOG_SET_DEFAULT_POST,
} from 'state/action-types';
import request from 'utils/request';
import {
	clearPostsError,
	recievePosts,
	setActivePostSlug,
	setNextContentPath,
	setPostsError,
	setPreviousContentPath,
} from './actions';
import parsePosts from './parsePosts';
import {
	getActivePostSlug,
	getNextPostSlug,
	getPostBySlug,
	getPosts,
	getPostsError,
	getPostsTotal,
	getPreviousPostSlug,
} from './selectors';

export function* fetchPosts() {
	const requestURL = 'http://www.spentaylor.com/wp-json/wp/v2/posts?callback=?';
	const response = yield call( request, requestURL, {
		parse: parsePosts,
	} );

	if ( ! response.err ) {
		yield put( recievePosts( response ) );
	} else {
		yield put( setPostsError( 'Something went wrong while connecting to wordpress :(' ) );
	}
}

export function* setActivePost( action ) {
	const { slug } = action;
	const posts = yield select( getPosts );
	const total = yield select( getPostsTotal );

	yield put( clearPostsError() );

	// TODO: handle cases where there are still no posts, this assumes
	// that fetching posts always successfully returns a number of posts.
	if ( isEmpty( posts ) || total !== posts.length ) {
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
	const total = yield select( getPostsTotal );

	// TODO: handle cases where there are still no posts, this assumes
	// that fetching posts always successfully returns a number of posts.
	if ( isEmpty( posts ) || total !== posts.length ) {
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
	yield takeEvery( BLOG_SET_DEFAULT_POST, setDefaultPost );
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
