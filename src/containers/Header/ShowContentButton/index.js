/**
 * External Dependencies
 */
import React, { noscript } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import DownIcon from 'react-icons/lib/fa/angle-down';

/**
 * Internal Dependencies
 */
import { getCurrentContentPath } from 'state/routing/selectors';

export const ShowContentButton = ( { className, currentContentPath } ) => {
	if ( ! currentContentPath ) {
		return <noscript />;
	}

	return (
		<Link className={ className } to={ currentContentPath }>
			<DownIcon height="100%" />
		</Link>
	);
};

export default connect(
	state => ( {
		currentContentPath: getCurrentContentPath( state ),
	} )
)( ShowContentButton );
