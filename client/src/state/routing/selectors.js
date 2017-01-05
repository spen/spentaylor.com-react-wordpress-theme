
/**
 * External Dependencies
 */
import { get } from 'lodash';

export function getCurrentPageNamespace( state ) {
	return get( state, 'routing.currentPageNamespace' );
}

export function getCurrentContentPath( state ) {
	return get( state, 'routing.currentContentPath' );
}

export function getNextContentPath( state ) {
	const pageNamespace = getCurrentPageNamespace( state );
	return get( state, pageNamespace + '.nextContentPath' );
}

export function getPreviousContentPath( state ) {
	const pageNamespace = getCurrentPageNamespace( state );
	return get( state, pageNamespace + '.previousContentPath' );
}
