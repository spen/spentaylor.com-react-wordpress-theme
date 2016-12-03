/**
 * External Dependencies
 */
import React, { Component } from 'react';

/**
 * Internal Dependencies
 */
import ContentArea from 'components/ContentArea';
import Header from 'containers/Header';
import Intro from 'containers/Intro';
import PageWrap from './styles/App';

let contentComponent;

export default class App extends Component {
	render() {
		const { children } = this.props;
		const showContent = !! children;

		if ( children ) {
			contentComponent = children;
		}

		return (
			<PageWrap open={ showContent }>
				<Intro />
				<Header showContent={ showContent } />
				<ContentArea>
					{ contentComponent }
				</ContentArea>
			</PageWrap>
		);
	}
}
