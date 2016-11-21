/**
 * External Dependencies
 */
import React, { Component } from 'react';
/**
 * Internal Dependencies
 */
import ShowContentButton from './ShowContentButton';
import StyledHeader from './styles/Header';

export default class Header extends Component {
	render() {
		return (
			<StyledHeader show intro>
				<ul role="nav">
					<ShowContentButton />
				</ul>
			</StyledHeader>
		);
	}
}
