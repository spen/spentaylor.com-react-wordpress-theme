/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import { getCurrentProject } from 'state/projects/selectors';

export class CurrentProject extends Component {
	render() {
		const { currentProject } = this.props;

		if ( ! currentProject ) {
			return <p> loading... </p>;
		}

		return (
			<h2>Current: { currentProject.title }</h2>
		);
	}
}

function mapStateToProps( state ) {
	const currentProject = getCurrentProject( state );

	return {
		currentProject,
	};
}

export default connect( mapStateToProps )( CurrentProject );
