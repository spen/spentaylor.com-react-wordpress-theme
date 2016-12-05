/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import { buttonStyler } from './styles';

export default function( { children, href, label, openNew, ...props } ) {
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
			{ ...props }
		>
			{ children || label }
		</Button>
	);
}

