/**
 * External Dependencies
 */
import React from 'react';
import { connect } from 'react-redux';
import RightIcon from 'react-icons/lib/fa/angle-right';
import { Link } from 'react-router';

/**
 * Internal Dependencies
 */
import IconButton from 'components/IconButton';
import { getNextContentPath } from 'state/routing/selectors';

export const NextButtonLink = ( { className, targetPath } ) => (
	<Link
		to={ {
			pathname: targetPath,
			state: { direction: 'next' },
		} }
	>
		<IconButton
			Icon={ RightIcon }
			className={ className }
			width="60px"
			height="60px"
		/>
	</Link>
);

export default connect(
	state => ( {
		targetPath: getNextContentPath( state ),
	} )
)( NextButtonLink );
