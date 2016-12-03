/**
 * External Dependencies
 */
import React, { Component } from 'react';
/**
 * Internal Dependencies
 */
import ContentContainer from 'components/ContentContainer';
import Paper from 'components/Paper';

import WorkExperience from './WorkExperience';

export default class AboutPage extends Component {
	render() {
		return (
			<ContentContainer>
				<h2>About</h2>
				<Paper>
					<WorkExperience />
				</Paper>
			</ContentContainer>
		);
	}
}
