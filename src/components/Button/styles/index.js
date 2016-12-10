/**
 * External Dependencies
 */
import styled, { css } from 'styled-components';

/**
 * Internal Dependencies
 */
import {
	DISABLED_BUTTON_HEX,
	DISABLED_BUTTON_SHADOW_HEX,
} from 'constants/colors';
import { propValue } from 'utils/styles';

const DEFAULT_HEIGHT = 50;

export const constants = {
	DEFAULT_HEIGHT,
};

const getBoxShadow = ( { disabled, shadowColor } ) => {
	if ( shadowColor ) {
		return `
			box-shadow: 0 4px 0 ${ disabled ? DISABLED_BUTTON_SHADOW_HEX : shadowColor };
			&:active {
				top: 3px;
				box-shadow: 0 1px 0 ${ disabled ? DISABLED_BUTTON_SHADOW_HEX : shadowColor };
			}
		`;
	}
};

const getBackgroundColor = ( { disabled, mainColor } ) => {
	const color = disabled
		? DISABLED_BUTTON_HEX
		: propValue( 'mainColor', 'transparent' )( { mainColor } );

	return `background-color: ${ color };`;
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
	${ getBackgroundColor }
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

export const A = styled.a`${ buttonStyles }`;

export const Button = styled.button`${ buttonStyles }`;
