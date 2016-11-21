/**
 * External Dependencies
 */
import React, { Component } from 'react';
/**
 * Internal Dependencies
 */
import ShowContentButton from './ShowContentButton';
import ShowIntroButton from './ShowIntroButton';
import StyledHeader from './styles/Header';

export default class Header extends Component {
	render() {
		const { showContent } = this.props;

		return (
			<StyledHeader show showContent={ showContent }>
				{
					showContent
						? <ShowIntroButton />
						: <ShowContentButton />
				}
			</StyledHeader>
		);
	}
}
