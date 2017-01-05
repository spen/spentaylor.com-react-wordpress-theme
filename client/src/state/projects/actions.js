/**
 * Internal Dependencies
 */
import {
	PROJECTS_ERROR_CLEAR,
	PROJECTS_ERROR_SET,
	PROJECTS_FETCH,
	PROJECTS_NEXT_PATH_SET,
	PROJECTS_PREVIOUS_PATH_SET,
	PROJECTS_RECEIVE,
	PROJECTS_SET_ACTIVE,
	PROJECTS_SET_ACTIVE_SLUG,
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

export function setActiveProject( slug ) {
	return {
		type: PROJECTS_SET_ACTIVE,
		slug,
	};
}

export function setActiveProjectSlug( slug ) {
	return {
		type: PROJECTS_SET_ACTIVE_SLUG,
		slug,
	};
}

export function setProjectsError( message ) {
	return {
		type: PROJECTS_ERROR_SET,
		message,
	};
}

export function clearProjectsError() {
	return {
		type: PROJECTS_ERROR_CLEAR,
	};
}

export function setNextContentPath( path ) {
	return {
		type: PROJECTS_NEXT_PATH_SET,
		path,
	};
}

export function setPreviousContentPath( path ) {
	return {
		type: PROJECTS_PREVIOUS_PATH_SET,
		path,
	};
}
