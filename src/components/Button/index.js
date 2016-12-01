/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import { buttonStyler } from './styles';

export default function( { children, href, label, mainColor, openNew, shadowColor, textColor } ) {
	const Button = buttonStyler( href ? 'a' : 'div' );
	const linkProps = {
		href,
	};

	if ( href && openNew ) {
		linkProps.rel = 'noopener noreferrer';
		linkProps.target = '_blank';
	}

	return (
		<Button
			{ ...linkProps }
			mainColor={ mainColor }
			shadowColor={ shadowColor }
			textColor={ textColor }
		>
			{ children || label }
		</Button>
	);
}

