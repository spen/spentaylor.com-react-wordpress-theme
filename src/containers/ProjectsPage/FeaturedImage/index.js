/**
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import { LIGHT_GREY_HEX } from 'constants/colors';

export default styled.div`
	background-color: ${ LIGHT_GREY_HEX };
	background-image: url(${ props => props.src });
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	padding-bottom: 62.5%;
`;
