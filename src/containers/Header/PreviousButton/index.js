/**
 * External Dependencies
 */
import React, { noscript } from 'react';
import { connect } from 'react-redux';
import LeftIcon from 'react-icons/lib/fa/angle-left';
import { Link } from 'react-router';

/**
 * Internal Dependencies
 */
import { getPreviousContentPath } from 'state/routing/selectors';

export const PreviousButton = ( { className, showContent, targetPath } ) => {
	if ( ! showContent || ! targetPath ) {
		return <noscript />;
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
};

export default connect(
	state => ( {
		targetPath: getPreviousContentPath( state ),
	} )
)( PreviousButton );
