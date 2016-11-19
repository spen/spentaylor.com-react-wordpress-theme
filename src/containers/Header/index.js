/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import StyledHeader from './styles/Header';

const InlineLi = styled.li`
	display: inline-block;
	padding: 5px 20px;
`;

export default class Header extends Component {
	render() {
		return (
			<StyledHeader show intro>
				<ul role="nav">
					<InlineLi><Link to="/">Root</Link></InlineLi>
					<InlineLi><Link to="/about">About</Link></InlineLi>
					<InlineLi><Link to="/projects">Projects</Link></InlineLi>
					<InlineLi><Link to="/blog">Blog</Link></InlineLi>
					<InlineLi><Link to="/contact">Contact</Link></InlineLi>
				</ul>
			</StyledHeader>
		);
	}
}
