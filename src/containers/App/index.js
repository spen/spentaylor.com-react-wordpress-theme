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
		const showContent = !! children;

		return (
			<PageWrap open={ showContent }>
				<Intro />
				<Header showContent={ showContent } />
				{ children }
			</PageWrap>
		);
	}
}
