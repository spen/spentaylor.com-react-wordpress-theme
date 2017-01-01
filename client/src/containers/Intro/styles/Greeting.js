/**
 * External Dependencies
 */
import styled, { css } from 'styled-components';

export const greetingStyles = css`
	color: rgba(255,90,110,1);
	font-size: 15vw;
	text-shadow: 0 6px rgba(125,30,40,1);
	margin: 0.2em auto;

	@media (min-width: 960px) {
		font-size: 8em;
	}
`;

const Greeting = styled.h1`${ greetingStyles }`;

export default Greeting;
