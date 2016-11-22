/**
 * External Dependencies
 */
import { call, put, take } from 'redux-saga/effects';

/**
 * Internal Dependencies
 */
import { recieveProjects } from './actions';
import { SITE_URL } from 'constants/wp';
import { PROJECTS_FETCH } from 'state/action-types';
import request from 'utils/request';

export function* getProjects() {
	const requestURL = 'http://public-api.wordpress.com/rest/v1.1/sites/' +
		SITE_URL + '/posts?callback=?';
	const response = yield call( request, requestURL );

	if ( ! response.err ) {
		yield put( recieveProjects( response ) );
	} else {
		// TODO: 'put' failed action
	}
}

export function* getProjectsWatcher() {
	while ( yield take( PROJECTS_FETCH ) ) {
		yield call( getProjects );
	}
}

export default [
	getProjectsWatcher,
];
