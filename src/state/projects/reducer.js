/**
 * Internal Dependencies
 */
import { PROJECTS_RECEIVE } from 'state/action-types';

export default function( state = {}, action ) {
	switch ( action.type ) {
		case PROJECTS_RECEIVE: {
			// TODO: whitelist payload properties
			return {
				...state,
				...action.payload,
			};
		}
		default:
			return state;
	}
}
