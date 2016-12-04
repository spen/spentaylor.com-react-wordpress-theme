/**
 * External Dependencies
 */
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * Internal Dependencies
 */
import ContentContainer from 'components/ContentContainer';
import CopyBlock from 'components/CopyBlock';
import Paper from 'components/Paper';
import WorkExperience from './WorkExperience';
import data from './data.json';

export default class AboutPage extends Component {
	render() {
		return (
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
	}
}
