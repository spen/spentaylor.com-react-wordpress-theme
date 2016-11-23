/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import { fetchProjects } from 'state/projects/actions';
import CurrentProject from './CurrentProject';

export class ProjectsPage extends Component {

	componentWillMount() {
		this.props.onEnter();
	}

	render() {
		return (
			<div>
				<CurrentProject />
			</div>
		);
	}
}

function mapDispatchToProps( dispatch ) {
	return {
		onEnter: () => {
			dispatch( fetchProjects() );
		},
	};
}

export default connect( null, mapDispatchToProps )( ProjectsPage );
