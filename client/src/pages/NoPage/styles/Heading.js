/**
 * External Dependencies
 */
import styled, { css } from 'styled-components';

/**
 * Internal Dependencies
 */
import { ERROR_HEX } from 'constants/colors';

export const headingStyles = css`
    color: ${ ERROR_HEX };
`;

const Heading = styled.h1`${ headingStyles }`;

export default Heading;
