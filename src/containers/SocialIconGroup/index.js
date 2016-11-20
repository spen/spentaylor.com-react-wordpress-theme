/**
 * External Dependencies
 */
import GithubIcon from 'react-icons/lib/fa/github';
import InstagramIcon from 'react-icons/lib/fa/instagram';
import LinkedinIcon from 'react-icons/lib/fa/linkedin';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import React, { Component } from 'react';

/**
 * Internal Dependencies
 */
import socialLinks from 'constants/socialLinks';
import StyledSocialIconGroup from './styles/SocialIconGroup';
import StyledSocialIcon from './styles/SocialIcon';

const socialNetworks = [
	{
		url: socialLinks.twitter,
		icon: TwitterIcon,
	}, {
		url: socialLinks.github,
		icon: GithubIcon,
	}, {
		url: socialLinks.linkedin,
		icon: LinkedinIcon,
	}, {
		url: socialLinks.instagram,
		icon: InstagramIcon,
	},
];

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

