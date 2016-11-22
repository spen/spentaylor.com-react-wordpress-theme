/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import DownIcon from 'react-icons/lib/fa/angle-down';

export class ShowContentButton extends Component {
	render() {
		const { className, previousContentPath } = this.props;

		if ( ! previousContentPath ) {
			return null;
		}

		return (
			<Link className={ className } to={ previousContentPath }>
				<DownIcon height="100%" />
			</Link>
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
