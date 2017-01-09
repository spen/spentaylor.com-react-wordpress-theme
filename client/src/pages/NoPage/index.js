/**
 * External Dependencies
 */
import React from 'react';
import DocumentTitle from 'react-document-title';

/**
 * Internal Dependencies
 */
import ContentContainer from 'components/ContentContainer';
import CopyBlock from 'components/CopyBlock';
import Paper from 'components/Paper';
import Heading from './styles/Heading';
import Link from './styles/Link';

export default () => (
	<DocumentTitle title="Spen Taylor">
		<ContentContainer>
			<h2>Oh No!</h2>
			<Paper>
				<CopyBlock>
					<Heading>There's nothing here! 😱</Heading>
					<Link to="/"><p>Check out the landing page ☝</p></Link>
				</CopyBlock>
			</Paper>
		</ContentContainer>
	</DocumentTitle>
);
