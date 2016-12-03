/**
 * External Dependencies
 */
import styled from 'styled-components';

import { LIGHT_GREY_HEX } from 'constants/colors';

export const ProjectDates = styled.p`
	color: ${ LIGHT_GREY_HEX };
	font-size: 1em;
	margin: 0;
`;

export const ProjectDetails = styled.div`
	flex: 1;
	padding: 20px;
`;

export const ProjectInfo = styled.div`
	display: flex;
`;

export const ProjectLogo = styled.div`
	align-items: center;
	display: flex;
`;

export const ProjectRole = styled.p`
	color: ${ LIGHT_GREY_HEX };
	font-size: 1.2em;
	margin: 0 0 5px 0;
`;

export const ProjectTitle = styled.h2`
	color: ${ LIGHT_GREY_HEX };
	font-size: 2em;
	margin: 0;
`;
