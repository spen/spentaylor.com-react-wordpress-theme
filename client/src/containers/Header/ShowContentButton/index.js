/**
 * External Dependencies
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import DownIcon from 'react-icons/lib/fa/angle-down';

/**
 * Internal Dependencies
 */
import IconButton from 'components/IconButton';
import { getCurrentContentPath } from 'state/routing/selectors';

export const ShowContentButton = ( { className, currentContentPath } ) => (
	<Link to={ currentContentPath }>
		<IconButton
			className={ className }
			Icon={ DownIcon }
			width="60px"
			height="60px"
			textColor="#00c8b4"
		/>
	</Link>
);

export default connect(
	state => ( {
		currentContentPath: getCurrentContentPath( state ),
	} )
)( ShowContentButton );
