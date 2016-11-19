/**
 * External Dependencies
 */
import React, { Component } from 'react';

/**
 * Internal Dependencies
 */
import Header from 'containers/Header';
import Intro from 'containers/Intro';

export default class App extends Component {
	render() {
		const { children } = this.props;

		return (
			<div className = { 'page-wrap ' + ( children ? 'content-state' : 'intro-state' ) }>
				<Intro />
				<Header />
				{ children }
			</div>
		);
	}
}
