/**
 * External Dependencies
 */
import { find, get } from 'lodash';

export function getCurrentProjects( state ) {
	return get( state, 'projects.list' );
}

export function getCurrentProjectId( state ) {
	return get( state, 'projects.currentId' );
}

export function getCurrentProject( state ) {
	const projects = getCurrentProjects( state );
	const currentId = getCurrentProjectId( state );

	if ( ! projects || ! currentId ) {
		return null;
	}

	return find( projects, { ID: currentId } );
}
