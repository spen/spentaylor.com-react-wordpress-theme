/**
 * External Dependencies
 */
import styled, { css } from 'styled-components';

const BUTTON_HEIGHT = 50;

const getPadding = props => {
	return props.pad ? `
		padding-left: ${ BUTTON_HEIGHT }px;
		padding-right: ${ BUTTON_HEIGHT }px;
	` : null;
};

export const pullLeft = Icon => styled( Icon )`
	left: 0;
	position: absolute;
	width: ${ BUTTON_HEIGHT }px;
`;

export const pullRight = Icon => styled( Icon )`
	right: 0;
	position: absolute;
	width: ${ BUTTON_HEIGHT }px;
`;

export const contentStyles = css`
	width: 100%;
	height: 100%;
	display: -webkit-flex;
	align-items: center;
	justify-content: center;
	${ getPadding }
`;

export const Content = styled.div`${ contentStyles }`;
