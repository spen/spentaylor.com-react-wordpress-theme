/**
 * External Dependencies
 */
import React from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * Internal Dependencies
 */
import ContentContainer from 'components/ContentContainer';
import CopyBlock from 'components/CopyBlock';
import Paper from 'components/Paper';
import WorkExperience from './WorkExperience';
import data from './data.json';

export default () => (
	<ContentContainer>
		<h2>About</h2>
		<Paper>
			<CopyBlock>
				<ReactMarkdown source={ data.blurb } />
			</CopyBlock>
			<WorkExperience />
		</Paper>
	</ContentContainer>
);
