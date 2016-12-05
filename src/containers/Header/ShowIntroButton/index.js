/**
 * External Dependencies
 */
import React from 'react';
import { IndexLink } from 'react-router';
import BarsIcon from 'react-icons/lib/fa/bars';

export default ( { className, showContent } ) => {
	if ( ! showContent ) {
		return <noscript />;
	}

	return (
		<IndexLink className={ className } to="/">
			<BarsIcon height="100%" />
		</IndexLink>
	);
};
