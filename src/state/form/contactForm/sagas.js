/**
 * External Dependencies
 */
import { call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';

/**
 * Internal Dependencies
 */
import { CONTACT_FORM_SUBMIT } from 'state/action-types';
import request from 'utils/request';

export function* submitForm( action ) {
	const { email, name, message } = action.payload;
	const body = new FormData();

	body.append( '_subject', 'spentaylor.com' );
	body.append( 'email', email );
	body.append( 'name', name );
	body.append( 'message', message );

	const requestURL = '//formspree.io/spen_@hotmail.co.uk';
	const requestOptions = {
		method: 'POST',
		headers: new Headers( {
			Accept: 'application/json',
		} ),
		body,
	};

	const response = yield call( request, requestURL, requestOptions );

	if ( ! response.err ) {
		// TODO: 'put' successful action
	// } else {
		// TODO: 'put' failed action
	}
}

export function* submitFormWatcher() {
	yield takeEvery( CONTACT_FORM_SUBMIT, submitForm );
}

export default [
	submitFormWatcher,
];
