/**
 * External Dependencies
 */
import styled, { css } from 'styled-components';

export const buttonStyles = css`
	color: ${ props => props.showContent ? 'white' : '#00c8b4' };
	font-size: ${ props => props.showContent ? '1.5em' : '2em' };
	transition: color 0.5s ease, font-size 0.05s ease;
	display: inline-block;
	vertical-align: middle;
	width: 60px;
	text-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
	line-height: 60px;
	height: 60px;

	&:hover {
		font-size: ${ props => props.showContent ? '1.8em' : '2.8em' };
	}
`;

export function buttonStyler( Button ) {
	return styled( Button )`${ buttonStyles }`;
}

export default styled.div`${ buttonStyles }`;
