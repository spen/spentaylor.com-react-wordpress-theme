/*
 * External Dependencies
 */
import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Header extends Component {
	render() {
		return (
			<ul role="nav" className="header">
				<li><Link to="/">Root</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/projects">Projects</Link></li>
				<li><Link to="/blog">Blog</Link></li>
				<li><Link to="/contact">Contact</Link></li>
			</ul>
		);
	}
}
