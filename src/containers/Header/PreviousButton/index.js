/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeftIcon from 'react-icons/lib/fa/angle-left';
import { Link } from 'react-router';

/**
 * Internal Dependencies
 */
import { getPreviousContentPath } from 'state/routing/selectors';

export class PreviousButton extends Component {
	render() {
		const { className, showContent, targetPath } = this.props;

		if ( ! showContent || ! targetPath ) {
			return null;
		}

		return (
			<Link
				to={ {
					pathname: targetPath,
					state: { direction: 'previous' },
				} }
				className={ className }
				style={ { left: '0', position: 'absolute' } }
			>
				<LeftIcon height="100%" />
			</Link>
		);
	}
}

function mapStateToProps( state ) {
	const targetPath = getPreviousContentPath( state );

	return {
		targetPath,
	};
}

export default connect( mapStateToProps )( PreviousButton );
