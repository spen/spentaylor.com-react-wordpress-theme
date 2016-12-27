/**
 * External Dependencies
 */
import { get } from 'lodash';
import React, { Component } from 'react';
import { RouteTransition } from 'react-router-transition';

const leftState = { opacity: 0, translateX: 30 };
const rightState = { opacity: 0, translateX: -30 };
const activeState = { opacity: 1, translateX: 0 };

const mapStyles = styles => ( {
	transform: `translateX(${ styles.translateX }%)`,
	opacity: styles.opacity,
	position: 'absolute',
	width: '100%',
} );

export class PageTransition extends Component {
	render() {
		const { location, children } = this.props;
		const direction = get( location, 'state.direction' );

		return (
			<RouteTransition
				atEnter={ direction === 'previous' ? rightState : leftState }
				atLeave={ direction === 'previous' ? leftState : rightState }
				atActive={ activeState }
				mapStyles={ mapStyles }
				pathname={ location.pathname }
				runOnMount={ false }
			>
				{ children }
			</RouteTransition>
		);
	}
}

export default PageTransition;
