/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import socialNetworks from 'constants/socialNetworks';
import Button from './styles/Button';
import { iconStyler } from './styles/Icon';

export default () => (
	<div>
		{ socialNetworks.map( socialNetwork => (
			<Button
				href={ socialNetwork.url }
				key={ socialNetwork.url }
				openNew={ true }
				mainColor={ socialNetwork.mainColor }
				shadowColor={ socialNetwork.darkColor }
				textColor={ socialNetwork.textColor }
				label={ socialNetwork.title }
				Icon={ iconStyler( socialNetwork.icon ) }
				iconPlacement="left"
			/>
		) ) }
	</div>
);
