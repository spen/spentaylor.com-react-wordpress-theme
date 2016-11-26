/* eslint no-shadow: 0 */

/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import { setActivePost } from 'state/blog/actions';

export class BlogPage extends Component {

	componentWillMount() {
		const { params, setActivePost } = this.props;
		setActivePost( params.slug );
	}

	render() {
		return (
			<div>
				{ this.props.children }
			</div>
		);
	}
}

function mapDispatchToProps( dispatch ) {
	return {
		setActivePost: slug => {
			dispatch( setActivePost( slug ) );
		},
	};
}

export default connect( null, mapDispatchToProps )( BlogPage );
