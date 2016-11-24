
/**
 * External Dependencies
 */
import { get } from 'lodash';

export function getCurrentContentPath( state ) {
	return get( state, 'routing.currentContentPath' );
}
