
/**
 * External Dependencies
 */
import { get } from 'lodash';

export function getCurrentContentPath( state ) {
	return get( state, 'routing.currentContentPath' );
}

export function getNextContentPath( state ) {
	return get( state, 'routing.nextContentPath' );
}

export function getPreviousContentPath( state ) {
	return get( state, 'routing.previousContentPath' );
}
