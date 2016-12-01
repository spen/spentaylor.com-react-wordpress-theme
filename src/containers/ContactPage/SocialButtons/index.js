/**
 * External Dependencies
 */
import React, { Component } from 'react';

/**
 * Internal Dependencies
 */
import socialLinks from 'constants/socialLinks';
import Button from 'components/Button';

const socialNetworks = [
	{
		url: socialLinks.twitter,
		title: 'Twitter',
		mainColor: '#00aced',
		darkColor: '#0087ba',
	}, {
		url: socialLinks.github,
		title: 'Github',
		mainColor: '#666666',
		darkColor: '#4d4d4d',
	}, {
		url: socialLinks.linkedin,
		title: 'LinkedIn',
		mainColor: '#007bb6',
		darkColor: '#005983',
	}, {
		url: socialLinks.instagram,
		title: 'Instagram',
		mainColor: '#3f729b',
		darkColor: '#305777',
	},
];

export default class extends Component {
	render() {
		return (
			<div>
				{ socialNetworks.map( socialNetwork => {
					return (
						<Button
							href={ socialNetwork.url }
							key={ socialNetwork.url }
							openNew={ true }
							mainColor={ socialNetwork.mainColor }
							shadowColor={ socialNetwork.darkColor }
							textColor={ socialNetwork.textColor }
							label={ socialNetwork.title }
						/>
					);
				} ) }
			</div>
		);
	}
}
