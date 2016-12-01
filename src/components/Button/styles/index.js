/**
 * External Dependencies
 */
import styled, { css } from 'styled-components';

/**
 * Internal Dependencies
 */
import { propValue } from 'utils/styles';

const BUTTON_HEIGHT = 50;

export const constants = {
	BUTTON_HEIGHT,
};

export const buttonStyles = css`
	color: ${ propValue( 'textColor', '#fff' ) };
	backgroundColor: ${ propValue( 'mainColor', '#555' ) };
	box-shadow: 0 4px 0 ${ propValue( 'shadowColor', '#333' ) };
	text-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
	height: ${ BUTTON_HEIGHT }px;
	line-height: ${ BUTTON_HEIGHT }px;
	min-width: ${ BUTTON_HEIGHT }px;
	text-align: center;
	position: relative;
	display: inline-block;
	cursor: pointer;
	width: 100%;
	margin: 8px auto;
	display: flex;
	align-items: center;
	justify-content: center;

	&:active {
		top: 3px;
		box-shadow: 0 1px 0 ${ propValue( 'shadowColor', '#333' ) };
	}
`;

export function buttonStyler( Button ) {
	return styled( Button )`${ buttonStyles }`;
}
