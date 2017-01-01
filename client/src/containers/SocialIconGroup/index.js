/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import socialNetworks from 'constants/socialNetworks';
import StyledSocialIconGroup from './styles/SocialIconGroup';
import StyledSocialIcon from './styles/SocialIcon';

const SocialIconGroup = () => (
	<StyledSocialIconGroup>
		{ socialNetworks.map( socialNetwork => {
			const SocialIcon = socialNetwork.icon;
			return (
				<StyledSocialIcon
					key={ socialNetwork.url }
					href={ socialNetwork.url }
					target="_blank"
				>
					<SocialIcon />
				</StyledSocialIcon>
			);
		} ) }
	</StyledSocialIconGroup>
);

export default SocialIconGroup;
