/**
 * External Dependencies
 */
import React, { Component } from 'react';

/**
 * Internal Dependencies
 */
import Header from 'containers/Header';
import Intro from 'containers/Intro';

import PageWrap from './styles/App';

export default class App extends Component {
	render() {
		const { children } = this.props;

		return (
			<PageWrap open={ !! children }>
				<Intro />
				<Header />
				{ children }
			</PageWrap>
		);
	}
}
