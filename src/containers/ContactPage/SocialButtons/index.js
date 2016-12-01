/**
 * External Dependencies
 */
import React, { Component } from 'react';

/**
 * Internal Dependencies
 */
import socialNetworks from 'constants/socialNetworks';
import Button from 'components/Button';

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
