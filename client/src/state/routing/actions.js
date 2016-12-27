/**
 * Internal Dependencies
 */
import {
	ROUTING_SET_NEXT_CONTENT_PATH,
	ROUTING_SET_PREVIOUS_CONTENT_PATH,
} from 'state/action-types';

export function setNextContentPath( path ) {
	return {
		type: ROUTING_SET_NEXT_CONTENT_PATH,
		path,
	};
}

export function setPreviousContentPath( path ) {
	return {
		type: ROUTING_SET_PREVIOUS_CONTENT_PATH,
		path,
	};
}
