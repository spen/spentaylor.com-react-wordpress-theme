/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import { getActiveProject } from 'state/projects/selectors';

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
	const currentProject = getActiveProject( state );

	return {
		currentProject,
	};
}

export default connect( mapStateToProps )( CurrentProject );
