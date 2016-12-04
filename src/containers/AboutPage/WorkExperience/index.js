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
import {
	ProjectDates,
	ProjectDetails,
	ProjectInfo,
	ProjectLogo,
	ProjectRole,
	ProjectTitle,
} from './styles';
import data from '../data.json';

export default class WorkExperience extends Component {
	render() {
		const workExperiences = data.experience;
		return (
			<CopyBlock>
				{ map( workExperiences, experience => {
					const { description, from, image, jobTitle, projectTitle, to } = experience;

					return (
						<div key={ projectTitle }>
							<ProjectInfo>
								<ProjectLogo>
									<Porthole borderColor="#999" width="100px" image={ image } />
								</ProjectLogo>
								<ProjectDetails>
									<ProjectTitle>{ projectTitle }</ProjectTitle>
									<ProjectRole>{ jobTitle }</ProjectRole>
									<ProjectDates>{ from } - { to }</ProjectDates>
								</ProjectDetails>
							</ProjectInfo>
							<ReactMarkdown source={ description } />
						</div>
					);
				} ) }
			</CopyBlock>
		);
	}
}
