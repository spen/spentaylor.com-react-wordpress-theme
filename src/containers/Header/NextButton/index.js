/**
 * External Dependencies
 */
import React, { noscript } from 'react';
import { connect } from 'react-redux';
import RightIcon from 'react-icons/lib/fa/angle-right';
import { Link } from 'react-router';

/**
 * Internal Dependencies
 */
import { getNextContentPath } from 'state/routing/selectors';

export const NextButton = ( { className, showContent, targetPath } ) => {
	if ( ! showContent || ! targetPath ) {
		return <noscript />;
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
};

export default connect(
	state => ( {
		targetPath: getNextContentPath( state ),
	} )
)( NextButton );
