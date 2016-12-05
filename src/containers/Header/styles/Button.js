/**
 * External Dependencies
 */
import styled, { css } from 'styled-components';

export const buttonStyles = css`
	font-size: 1.5em;
	transition: color 0.5s ease, font-size 0.05s ease;
	display: inline-block;
	vertical-align: middle;
	width: 60px;
	text-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
	min-height: 60px;
	line-height: 60px;
	height: 60px;
	display: block;
	margin: 0 auto;

	&:hover {
		font-size: 1.8em;
	}
`;

export function buttonStyler( Button ) {
	return styled( Button )`${ buttonStyles }`;
}

export default styled.div`${ buttonStyles }`;
