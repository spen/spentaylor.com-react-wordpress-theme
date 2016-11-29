/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import ContentContainer from 'components/ContentContainer';
import ErrorText from 'components/ErrorText';
import Paper from 'components/Paper';
import { getPostsError } from 'state/blog/selectors';

export class PostError extends Component {
	render() {
		const { postsError } = this.props;
		return (
			<ContentContainer>
				<h2>Oops!</h2>
				<Paper>
					<div style={ { padding: '10px 30px' } } >
						<ErrorText>
							{ postsError && postsError.message }
						</ErrorText>
					</div>
				</Paper>
			</ContentContainer>
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
