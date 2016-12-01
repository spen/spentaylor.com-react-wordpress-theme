/**
 * External Dependencies
 */
import React, { Component } from 'react';

/**
 * Internal Dependencies
 */
import socialNetworks from 'constants/socialNetworks';
import StyledSocialIconGroup from './styles/SocialIconGroup';
import StyledSocialIcon from './styles/SocialIcon';

export default class SocialIconGroup extends Component {
	render() {
		return (
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
	}
}

