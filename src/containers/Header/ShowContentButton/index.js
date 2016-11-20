/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import DownIcon from 'react-icons/lib/fa/angle-down';

export class ShowContentButton extends Component {
	render() {
		const { previousContentPath } = this.props;

		if ( ! previousContentPath ) {
			return null;
		}

		return (
			<Link to={ previousContentPath }><DownIcon /></Link>
		);
	}
}

function mapStateToProps( state ) {
	const previousContentPath = state.routing.previousContentPath;

	return {
		previousContentPath,
	};
}

export default connect( mapStateToProps )( ShowContentButton );
