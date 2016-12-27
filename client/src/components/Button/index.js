/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import { A, Button } from './styles';

export default ( { children, href, label, openNew, ...props } ) => {
	if ( href && openNew ) {
		const linkProps = {
			rel: 'noopener noreferrer',
			target: '_blank',
			href,
		};

		return (
			<A
				{ ...linkProps }
				{ ...props }
			>
				{ children || label }
			</A>
		);
	}

	return (
		<Button { ...props }>
			{ children || label }
		</Button>
	);
};
