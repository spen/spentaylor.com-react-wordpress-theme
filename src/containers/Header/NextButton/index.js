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
import { getNextPostSlug } from 'state/blog/selectors';

export class NextButton extends Component {
	render() {
		const { className, showContent, targetPostSlug } = this.props;

		if ( ! showContent || ! targetPostSlug ) {
			return null;
		}

		return (
			<Link
				to={ `/blog/${ targetPostSlug }` }
				className={ className }
				style={ { right: '0', position: 'absolute' } }
			>
				<RightIcon height="100%" />
			</Link>
		);
	}
}

function mapStateToProps( state ) {
	const targetPostSlug = getNextPostSlug( state );

	return {
		targetPostSlug,
	};
}

export default connect( mapStateToProps )( NextButton );
