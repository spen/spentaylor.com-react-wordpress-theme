/**
 * External Dependencies
 */
import { map } from 'lodash';
import React from 'react';
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
import { experiences } from '../data.json';

export default () => (
	<CopyBlock>
		{ map( experiences, ( { description, from, image, jobTitle, projectTitle, to } ) => (
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
		) ) }
	</CopyBlock>
);
