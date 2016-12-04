/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import socialNetworks from 'constants/socialNetworks';
import IconButton from 'components/IconButton';

export default () => (
	<div>
		{ socialNetworks.map( socialNetwork => (
			<IconButton
				href={ socialNetwork.url }
				key={ socialNetwork.url }
				openNew={ true }
				mainColor={ socialNetwork.mainColor }
				shadowColor={ socialNetwork.darkColor }
				textColor={ socialNetwork.textColor }
				label={ socialNetwork.title }
				LeftIcon={ socialNetwork.icon }
			/>
		) ) }
	</div>
);
