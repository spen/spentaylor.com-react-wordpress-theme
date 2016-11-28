/**
 * External Dependencies
 */
import { call, put, take } from 'redux-saga/effects';

/**
 * Internal Dependencies
 */
import {
	setNextContentPath,
	setPreviousContentPath,
} from './actions';

export function* clearNextContentPath() {
	yield put( setNextContentPath( null ) );
}

export function* clearPreviousContentPath() {
	yield put( setPreviousContentPath( null ) );
}

export function* clearPreviousAndNextPathsWatcher() {
	while ( yield take( 'ROUTING_CLEAR_PREVIOUS_AND_NEXT' ) ) {
		yield call( clearNextContentPath );
		yield call( clearPreviousContentPath );
	}
}

export default [
	clearPreviousAndNextPathsWatcher,
];
