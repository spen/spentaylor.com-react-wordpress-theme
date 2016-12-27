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
import { PROJECTS_SITE_URL } from 'constants/wp';
import {
	PROJECTS_FETCH,
	PROJECTS_SET_ACTIVE,
} from 'state/action-types';
import request from 'utils/request';
import {
	setNextContentPath,
	setPreviousContentPath,
} from 'state/routing/actions';
import {
	clearProjectsError,
	recieveProjects,
	setActiveProjectSlug,
	setProjectsError,
} from './actions';
import {
	getActiveProjectSlug,
	getNextProjectSlug,
	getProjectBySlug,
	getProjects,
	getProjectsError,
	getPreviousProjectSlug,
} from './selectors';

export function* fetchProjects() {
	const requestURL = 'http://public-api.wordpress.com/rest/v1.1/sites/' +
		PROJECTS_SITE_URL + '/posts?callback=?';
	const response = yield call( request, requestURL );

	if ( ! response.err ) {
		yield put( recieveProjects( response ) );
	} else {
		// TODO: 'put' failed action
	}
}

export function* setActiveProject( action ) {
	const { slug } = action;
	const projects = yield select( getProjects );

	yield put( clearProjectsError() );

	if ( isEmpty( projects ) ) {
		yield call( fetchProjects );
	}

	const error = yield select( getProjectsError );

	if ( ! isEmpty( error ) ) {
		return;
	}

	const matchedProject = yield select( getProjectBySlug, slug );

	if ( matchedProject ) {
		yield put( setActiveProjectSlug( matchedProject.slug ) );
		const nextProjectSlug = yield select( getNextProjectSlug );
		const previousProjectSlug = yield select( getPreviousProjectSlug );
		const nextPath = nextProjectSlug ? `/projects/${ nextProjectSlug }` : null;
		const previousPath = previousProjectSlug ? `/projects/${ previousProjectSlug }` : null;
		yield put( setNextContentPath( nextPath ) );
		yield put( setPreviousContentPath( previousPath ) );
	} else {
		yield put( setProjectsError( `Oh no! No project found matching: "${ slug }". :(` ) );
		yield put( setActiveProjectSlug( null ) );
	}
}

export function* setDefaultProject( ) {
	let projects = yield select( getProjects );

	if ( isEmpty( projects ) ) {
		yield call( fetchProjects );
	}

	const error = yield select( getProjectsError );

	if ( ! isEmpty( error ) ) {
		return;
	}

	const activeProjectSlug = yield select( getActiveProjectSlug );
	let targetSlug;

	if ( activeProjectSlug ) {
		targetSlug = activeProjectSlug;
	} else {
		projects = yield select( getProjects );
		const firstProject = yield call( first, projects );
		targetSlug = firstProject.slug;
	}
	const url = `/projects/${ targetSlug }`;

	yield put( push( url ) );
}

export function* setActiveProjectWatcher() {
	yield takeEvery( PROJECTS_SET_ACTIVE, setActiveProject );
}

export function* setDefaultProjectWatcher() {
	yield takeEvery( 'PROJECTS_SET_DEFAULT', setDefaultProject );
}

export function* fetchProjectsWatcher() {
	while ( yield take( PROJECTS_FETCH ) ) {
		yield call( fetchProjects );
	}
}

export default [
	fetchProjectsWatcher,
	setActiveProjectWatcher,
	setDefaultProjectWatcher,
];