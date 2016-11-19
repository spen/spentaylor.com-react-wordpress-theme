/**
 * External Dependencies
 */
import React, { Component } from 'react';
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import StyledIntro from './styles/intro';

const StyledHeader = styled.h2`
  	color: tomato;
  	text-align: center;
`;

export default class Intro extends Component {
	render() {
		return (
			<StyledIntro>
				<StyledHeader>Intro</StyledHeader>
			</StyledIntro>
		);
	}
}
