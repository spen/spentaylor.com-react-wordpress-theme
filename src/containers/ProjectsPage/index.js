/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ProjectsPage extends Component {
	render() {
		return (
			<h2 onClick={ this.props.trigger } >Projects</h2>
		);
	}
}

function mapDispatchToProps( dispatch ) {
	return {
		trigger: () => {
			dispatch( {
				type: 'PROJECTS_FETCH',
			} );
		},
	};
}

export default connect( null, mapDispatchToProps )( ProjectsPage );
