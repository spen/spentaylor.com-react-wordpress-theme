/**
 * External Dependencies
 */
import React from 'react';
import { connect } from 'react-redux';
import LeftIcon from 'react-icons/lib/fa/angle-left';
import { Link } from 'react-router';

/**
 * Internal Dependencies
 */
import IconButton from 'components/IconButton';
import { getPreviousContentPath } from 'state/routing/selectors';

export const PreviousButtonLink = ( { className, targetPath } ) => (
	<Link
		to={ {
			pathname: targetPath,
			state: { direction: 'previous' },
		} }
	>
		<IconButton
			LeftIcon={ LeftIcon }
			className={ className }
			width="60px"
			height="60px"
		/>
	</Link>
);

export default connect(
	state => ( {
		targetPath: getPreviousContentPath( state ),
	} )
)( PreviousButtonLink );
