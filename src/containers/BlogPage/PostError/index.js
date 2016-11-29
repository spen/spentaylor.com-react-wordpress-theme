/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import Paper from 'components/Paper';
import ErrorText from 'components/ErrorText';
import { getPostsError } from 'state/blog/selectors';

export class PostError extends Component {
	render() {
		const { postsError } = this.props;
		return (
			<div>
				<h2>Oops!</h2>
				<Paper>
					<div style={ { padding: '10px 30px' } } >
						<ErrorText>
							{ postsError && postsError.message }
						</ErrorText>
					</div>
				</Paper>
			</div>
		);
	}
}

function mapStateToProps( state ) {
	const postsError = getPostsError( state );

	return {
		postsError,
	};
}

export default connect( mapStateToProps )( PostError );
