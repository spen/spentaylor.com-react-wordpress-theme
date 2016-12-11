/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import Button from 'components/Button';
import { Content, pullLeft, pullRight } from './styles';

const IconButton = ( { children, label, Icon, iconPlacement, ...props } ) => {
	let PositionedIcon;

	if ( iconPlacement === 'left' ) {
		PositionedIcon = pullLeft( Icon );
	} else if ( iconPlacement === 'right' ) {
		PositionedIcon = pullRight( Icon );
	} else {
		PositionedIcon = Icon;
	}

	const pad = ( label && ( iconPlacement === 'left' || iconPlacement === 'right' ) );

	return (
		<Button { ...props }>
			<Content pad={ pad } >
				<PositionedIcon />
				{ children || label }
			</Content>
		</Button>
	);
};

IconButton.defaultProps = {
	Icon: null,
	iconPlacement: 'centre',
};

export default IconButton;
