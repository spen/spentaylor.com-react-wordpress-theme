/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import DownIcon from 'react-icons/lib/fa/angle-down';

export class ShowContentButton extends Component {
	render() {
		const { className, currentContentPath } = this.props;

		if ( ! currentContentPath ) {
			return null;
		}

		return (
			<Link className={ className } to={ currentContentPath }>
				<DownIcon height="100%" />
			</Link>
		);
	}
}

function mapStateToProps( state ) {
	const currentContentPath = state.routing.currentContentPath;

	return {
		currentContentPath,
	};
}

export default connect( mapStateToProps )( ShowContentButton );
