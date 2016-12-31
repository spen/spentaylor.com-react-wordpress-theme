/**
 * External Dependencies
 */
import { indexOf, find, get } from 'lodash';

export function getProjectTotal( state ) {
	return get( state, 'projects.total' );
}

export function getProjects( state ) {
	return get( state, 'projects.list' );
}

export function getProjectBySlug( state, slug ) {
	const projects = getProjects( state );

	if ( ! projects || ! slug ) {
		return null;
	}

	return find( projects, { slug } );
}

export function getActiveProject( state ) {
	const projects = getProjects( state );
	const activeProjectSlug = getActiveProjectSlug( state );

	if ( ! projects || ! activeProjectSlug ) {
		return null;
	}

	return getProjectBySlug( state, activeProjectSlug );
}

export function getActiveProjectSlug( state ) {
	return get( state, 'projects.activeSlug' );
}

export function getNextProjectSlug( state ) {
	const projects = getProjects( state );
	const activeProjectSlug = getActiveProjectSlug( state );
	const activeProject = getProjectBySlug( state, activeProjectSlug );

	const index = indexOf( projects, activeProject );

	if ( index < 0 || ! activeProject ) {
		return null;
	}

	const targetIndex = index + 1;

	return targetIndex <= projects.length - 1
		? projects[ targetIndex ].slug
		: null;
}

export function getPreviousProjectSlug( state ) {
	const projects = getProjects( state );
	const activeProjectSlug = getActiveProjectSlug( state );
	const activeProject = getProjectBySlug( state, activeProjectSlug );

	const index = indexOf( projects, activeProject );

	if ( index < 0 || ! activeProject ) {
		return null;
	}

	const targetIndex = index - 1;

	return targetIndex >= 0
		? projects[ targetIndex ].slug
		: null;
}

export function getProjectsError( state ) {
	return get( state, 'projects.error' );
}
