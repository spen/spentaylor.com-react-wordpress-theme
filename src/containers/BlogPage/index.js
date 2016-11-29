/**
 * External Dependencies
 */
import React, { Component } from 'react';

/**
 * Internal Dependencies
 */
import PageTransition from 'components/PageTransition';

export class BlogPage extends Component {
	render() {
		const { children, location } = this.props;

		return (
			<PageTransition location={ location }>
				{ children }
			</PageTransition>
		);
	}
}

export default BlogPage;
