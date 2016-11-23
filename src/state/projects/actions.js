/**
 * Internal Dependencies
 */
import {
	PROJECTS_FETCH,
	PROJECTS_RECEIVE,
} from 'state/action-types';

export function fetchProjects() {
	return {
		type: PROJECTS_FETCH,
	};
}

export function recieveProjects( payload ) {
	return {
		type: PROJECTS_RECEIVE,
		payload,
	};
}
