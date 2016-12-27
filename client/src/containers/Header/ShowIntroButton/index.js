/**
 * External Dependencies
 */
import React from 'react';
import { IndexLink } from 'react-router';
import BarsIcon from 'react-icons/lib/fa/bars';

/**
 * Internal Dependencies
 */
import IconButton from 'components/IconButton';

export default ( { className } ) => (
	<IndexLink className={ className } to="/">
		<IconButton
			Icon={ BarsIcon }
			width="60px"
			height="60px"
		/>
	</IndexLink>
);
