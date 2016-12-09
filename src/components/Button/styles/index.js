/**
 * External Dependencies
 */
import styled, { css } from 'styled-components';

/**
 * Internal Dependencies
 */
import { propValue } from 'utils/styles';

const DEFAULT_HEIGHT = 50;

export const constants = {
	DEFAULT_HEIGHT,
};

const getBoxShadow = ( { shadowColor } ) => {
	if ( shadowColor ) {
		return `
			box-shadow: 0 4px 0 ${ shadowColor };
			&:active {
				top: 3px;
				box-shadow: 0 1px 0 ${ shadowColor };
			}
		`;
	}
};

const getHeight = ( { height } ) => {
	return height
		? `
			height: ${ height };
			line-height: ${ height }px;
		`
		: `
			min-height: ${ DEFAULT_HEIGHT }px;
			line-height: ${ DEFAULT_HEIGHT }px;
		`;
};

export const buttonStyles = css`
	color: ${ propValue( 'textColor', '#fff' ) };
	background-color: ${ propValue( 'mainColor', 'transparent' ) };
	text-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
	${ getHeight }
	min-width: ${ DEFAULT_HEIGHT }px;
	text-align: center;
	position: relative;
	display: inline-block;
	cursor: pointer;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-style: none;
	padding-top: 0;
	padding-bottom: 0;
	${ getBoxShadow }

	&:focus {
		outline: none;
	}
`;

export function buttonStyler( Button ) {
	return styled( Button )`${ buttonStyles }`;
}
