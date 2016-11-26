/**
 * External Dependencies
 */
import React, { Component } from 'react';

export class BlogPage extends Component {

	render() {
		return (
			<div>
				{ this.props.children }
			</div>
		);
	}
}

export default BlogPage;
