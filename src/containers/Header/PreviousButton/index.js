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
import { getPreviousPostSlug } from 'state/blog/selectors';

export class PreviousButton extends Component {
	render() {
		const { className, showContent, targetPostSlug } = this.props;

		if ( ! showContent || ! targetPostSlug ) {
			return null;
		}

		return (
			<Link
				to={ {
					pathname: `/blog/${ targetPostSlug }`,
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
	const targetPostSlug = getPreviousPostSlug( state );

	return {
		targetPostSlug,
	};
}

export default connect( mapStateToProps )( PreviousButton );
