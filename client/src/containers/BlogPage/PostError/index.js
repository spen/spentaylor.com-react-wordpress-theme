/**
 * External Dependencies
 */
import React from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import ContentContainer from 'components/ContentContainer';
import CopyBlock from 'components/CopyBlock';
import ErrorText from 'components/ErrorText';
import Paper from 'components/Paper';
import { getPostsError } from 'state/blog/selectors';

export const PostError = ( { postsError } ) => {
	return (
		<ContentContainer>
			<h2>Oops!</h2>
			<Paper>
				<CopyBlock>
					<ErrorText>
						{ postsError && postsError.message }
					</ErrorText>
				</CopyBlock>
			</Paper>
		</ContentContainer>
	);
};

export default connect(
	state => ( {
		postsError: getPostsError( state ),
	} )
)( PostError );
