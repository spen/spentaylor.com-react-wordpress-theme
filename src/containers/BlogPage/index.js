/* eslint no-shadow: 0 */

/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

/**
 * Internal Dependencies
 */
import {
	fetchPosts,
	setCurrentSlug,
	setDefaultSlug,
} from 'state/blog/actions';
import {
	getPosts,
	getPostBySlug,
	getCurrentPostSlug,
	getCurrentPost,
} from 'state/blog/selectors';
import CurrentPost from './CurrentPost';

export class BlogPage extends Component {

	// TODO: better name?
	handleRoutingActions() {
		const {
			currentPostSlug,
			fetchPosts,
			goTo,
			params,
			posts,
			routedPost,
			setCurrentSlug,
			setDefaultSlug,
		} = this.props;

		if ( ! posts || ! posts.length ) {
			fetchPosts();
		} else if ( params.slug ) {
			if ( routedPost ) {
				setCurrentSlug( params.slug );
			} else {
				// TODO: show not found message
			}
		} else if ( currentPostSlug ) {
			const url = '/blog/' + currentPostSlug;
			goTo( url );
		} else {
			setDefaultSlug( posts );
		}
	}

	componentDidUpdate() {
		this.handleRoutingActions();
	}

	componentWillMount() {
		this.handleRoutingActions();
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
	const currentPost = getCurrentPost( state );
	const currentPostSlug = getCurrentPostSlug( state );
	const posts = getPosts( state );
	const routedPost = getPostBySlug( state, props.params.slug );

	const newState = {
		currentPost,
		currentPostSlug,
		posts,
		routedPost,
	};

	return newState;
}

function mapDispatchToProps( dispatch ) {
	return {
		goTo: url => {
			dispatch( push( url ) );
		},

		fetchPosts: () => {
			dispatch( fetchPosts() );
		},

		setCurrentSlug: slug => {
			dispatch( setCurrentSlug( slug ) );
		},

		setDefaultSlug: posts => {
			dispatch( setDefaultSlug( posts ) );
		},

	};
}

export default connect( mapStateToProps, mapDispatchToProps )( BlogPage );
