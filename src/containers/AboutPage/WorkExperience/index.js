/**
 * External Dependencies
 */
import { map } from 'lodash';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * External Dependencies
 */
import CopyBlock from 'components/CopyBlock';
import Porthole from 'components/Porthole';
import workExperiences from './data.json';

export default class WorkExperience extends Component {
	render() {
		return (
			<CopyBlock>
				<h2>Work Experience</h2>
				{ map( workExperiences, experience => {
					const { description, image, jobTitle, projectTitle } = experience;
					return (
						<div key={ projectTitle }>
							<div>
								<Porthole borderColor="#999" width="100px" image={ image } />
								<h3>{ projectTitle }</h3>
								<p>{ jobTitle }</p>
							</div>
							<ReactMarkdown source={ description } />
						</div>
					);
				} ) }
			</CopyBlock>
		);
	}
}
