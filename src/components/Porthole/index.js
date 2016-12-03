/**
 * External Dependencies
 */
import styled, { css } from 'styled-components';

/**
 * Internal Dependencies
 */
import { optionalRule, propValue } from 'utils/styles';

const getBorderWidth = props => {
	if ( props.borderColor ) {
		return `border-width: ${ propValue( 'borderWidth', '4px' )( props ) };`;
	}
};

const getBackgroundImage = props => {
	if ( props.image ) {
		return `background-image: url(${ props.image });`;
	}
};

export const portholeStyles = css`
	${ getBackgroundImage }
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	background-color: #ddd;
	border-radius: 50%;
	border-style: solid;
	width: ${ propValue( 'width', '120px' ) };
	height: ${ propValue( 'width', '120px' ) };
	overflow: hidden;
	${ optionalRule( 'border-color', 'borderColor' ) }
	${ getBorderWidth }
`;

export default styled.div`${ portholeStyles }`;
