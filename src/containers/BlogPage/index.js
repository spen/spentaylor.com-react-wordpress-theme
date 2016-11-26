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
import { getPostBySlug } from 'state/blog/selectors';
import CurrentPost from './CurrentPost';

export class BlogPage extends Component {

	componentWillMount() {
		const { params, setActivePost } = this.props;
		setActivePost( params.slug );
	}

	render() {
		const { routedPost } = this.props;

		return (
			<div>
				{ !! routedPost && <CurrentPost /> }
			</div>
		);
	}
}

function mapStateToProps( state, props ) {
	// get post by the url slug.
	const routedPost = getPostBySlug( state, props.params.slug );

	return {
		routedPost,
	};
}

function mapDispatchToProps( dispatch ) {
	return {
		setActivePost: slug => {
			dispatch( setActivePost( slug ) );
		},
	};
}

export default connect( mapStateToProps, mapDispatchToProps )( BlogPage );
