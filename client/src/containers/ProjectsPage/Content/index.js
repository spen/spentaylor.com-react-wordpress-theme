/**
 * External Dependencies
 */
import { isEmpty } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import { getActiveProject, getProjectBySlug, getProjectsError } from 'state/projects/selectors';
import Project from '../Project';
import ProjectError from '../Error';
import SkeletonProject from '../SkeletonProject';

export const BlogContent = ( { activeProject, project, projectsError } ) => {
	if ( ! isEmpty( projectsError ) ) {
		return <ProjectError />;
	}

	if ( ! project && ! activeProject ) {
		return <SkeletonProject />;
	}

	return <Project project={ project || activeProject } />;
};

export default connect(
	( state, props ) => ( {
		activeProject: getActiveProject( state ),
		project: getProjectBySlug( state, props.params.slug ),
		projectsError: getProjectsError( state ),
	} )
)( BlogContent );
