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

	return (
		<Button { ...props }>
			<Content pad={ LeftIcon || RightIcon }>
				{ PulledLeftIcon && <PulledLeftIcon /> }
				{ children || label }
				{ PulledRightIcon && <PulledRightIcon /> }
			</Content>
		</Button>
	);
}
