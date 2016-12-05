/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import Button from 'components/Button';
import { Content, pullLeft, pullRight } from './styles';

export default function( { children, label, LeftIcon, RightIcon, ...props } ) {
	const PulledLeftIcon = LeftIcon ? pullLeft( LeftIcon ) : null;
	const PulledRightIcon = RightIcon ? pullRight( RightIcon ) : null;

	const pad = label && ( LeftIcon || RightIcon );

	return (
		<Button { ...props }>
			<Content pad={ pad }>
				{ PulledLeftIcon && <PulledLeftIcon /> }
				{ children || label }
				{ PulledRightIcon && <PulledRightIcon /> }
			</Content>
		</Button>
	);
}
