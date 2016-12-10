/**
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import {
	DARK_GREY_HEX,
	ERROR_HEX,
	ERROR_BOX_HEX,
	ERROR_BOX_SHADOW_HEX,
} from 'constants/colors';

export default styled.input`
	border: none;
	overflow: auto;
    outline: none;
    color: ${ props => props.error ? ERROR_HEX : DARK_GREY_HEX };
	background-color: ${ props => props.error ? ERROR_BOX_HEX : 'white' };
	box-shadow: 0 4px 0 ${ props => props.error ? ERROR_BOX_SHADOW_HEX : 'rgba(0, 0, 0, 0.1)' };
	width: 100%;
    margin: 8px auto;
	padding: 0.2em 0.6em;
`;
