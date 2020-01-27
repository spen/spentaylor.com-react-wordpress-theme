/**
 * External Dependencies
 */
import styled, { css } from 'styled-components';

export const copyStyles = css`
	font-size: 2em;
	background: rgba(0,0,0,0.1);
	display: inline-block;
	margin: 0 auto;

	@media (min-width: 960px) {
		font-size: 1.2em;
	}
`;

const StyledLink = styled.p`${ copyStyles }`;

export default StyledLink;
