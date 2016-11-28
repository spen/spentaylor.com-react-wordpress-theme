/* eslint react/no-danger: 0 */

/**
 * External Dependencies
 */
import { isEmpty } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import Paper from 'components/Paper';
import SkeletonPost from 'components/SkeletonPost';
import { getActivePost, getPostsError } from 'state/blog/selectors';

function getContentHtml( content ) {
	// TODO: Explore html sanitizers to set this safely.
	return {
		__html: content,
	};
}

export class ActivePost extends Component {
	render() {
		const { activePost, postsError, style = {} } = this.props;
		if ( ! isEmpty( postsError ) && postsError.message ) {
			return (
				<div
					style={ {
						...style,
						position: 'absolute',
						width: '100%',
					} }
				>
					<h2>Oops!</h2>
					<Paper>
						<b style={ { color: '#d44' } }>{ postsError.message }</b>
					</Paper>
				</div>
			);
		}

		if ( ! activePost ) {
			return (
				<div
					style={ {
						...style,
						position: 'absolute',
						width: '100%',
					} }
				>
					<h2>Loading...</h2>
					<SkeletonPost />
				</div>
			);
		}

		return (
			<div
				style={ {
					...style,
					position: 'absolute',
					width: '100%',
				} }
			>
				<h2>{ activePost.title }</h2>
				<Paper>
					<div dangerouslySetInnerHTML={ getContentHtml( activePost.content ) }></div>
				</Paper>
			</div>
		);
	}
}

function mapStateToProps( state ) {
	const activePost = getActivePost( state );
	const postsError = getPostsError( state );

	return {
		activePost,
		postsError,
	};
}

export default connect( mapStateToProps )( ActivePost );
