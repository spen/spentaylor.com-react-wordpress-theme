/**
 * External Dependencies
 */
import styled, { css } from 'styled-components';

/**
 * External Dependencies
 */
import { ERROR_HEX } from 'constants/colors';

export const errorStyles = css`
	color: ${ ERROR_HEX };
	font-weight: ${ props => props.fontWeight ? props.fontWeight : '600' };
`;

export default styled.p`${ errorStyles }`;
