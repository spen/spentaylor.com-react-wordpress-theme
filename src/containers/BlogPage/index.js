/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { RouteTransition } from 'react-router-transition';

const mapStyles = styles => ( {
	transform: `translateX(${ styles.translateX }%)`,
	opacity: styles.opacity,
} );

export class BlogPage extends Component {
	render() {
		const { location, children } = this.props;

		return (
			<RouteTransition
				atEnter={ { opacity: 0, translateX: 30 } }
				atLeave={ { opacity: 0, translateX: -30 } }
				atActive={ { opacity: 1, translateX: 0 } }
				className="RouteTransition"
				component={ false }
				mapStyles={ mapStyles }
				pathname={ location.pathname }
				runOnMount={ false }
			>
				{ children }
			</RouteTransition>
		);
	}
}

export default BlogPage;
