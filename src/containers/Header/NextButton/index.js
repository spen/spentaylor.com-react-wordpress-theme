/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import RightIcon from 'react-icons/lib/fa/angle-right';
import { Link } from 'react-router';

/**
 * Internal Dependencies
 */
import { getNextContentPath } from 'state/routing/selectors';

export class NextButton extends Component {
	render() {
		const { className, showContent, targetPath } = this.props;

		if ( ! showContent || ! targetPath ) {
			return null;
		}

		return (
			<Link
				to={ {
					pathname: targetPath,
					state: { direction: 'next' },
				} }
				className={ className }
				style={ { right: '0', position: 'absolute' } }
			>
				<RightIcon height="100%" />
			</Link>
		);
	}
}

function mapStateToProps( state ) {
	const targetPath = getNextContentPath( state );

	return {
		targetPath,
	};
}

export default connect( mapStateToProps )( NextButton );
