/**
 * External Dependencies
 */
import styled, { css } from 'styled-components';

export const iconStyles = css`
	font-size: 1.5em;

	&:hover {
		font-size: 1.8em;
	}
`;

export function iconStyler( Icon ) {
	return styled( Icon )`${ iconStyles }`;
}
