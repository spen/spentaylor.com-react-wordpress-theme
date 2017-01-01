/**
 * External Dependencies
 */
import { Link } from 'react-router';
import styled, { css } from 'styled-components';

export const linkStyles = css`
	color: #00c8b4;
`;

const StyledLink = styled( Link )`${ linkStyles }`;

export default StyledLink;
