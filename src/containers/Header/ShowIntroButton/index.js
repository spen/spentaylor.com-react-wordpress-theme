/**
 * External Dependencies
 */
import React from 'react';
import { IndexLink } from 'react-router';
import BarsIcon from 'react-icons/lib/fa/bars';

export default ( { className } ) => (
	<IndexLink className={ className } to="/">
		<BarsIcon height="100%" />
	</IndexLink>
);
