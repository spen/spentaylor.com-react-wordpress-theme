/**
 * External Dependencies
 */
import styled, { css } from 'styled-components';
import { Link } from 'react-router';

/**
 * Internal Dependencies
 */
import { PINK_HEX, TURQUOISE_HEX } from 'constants/colors';

export const linkStyles = css`
    color: ${ TURQUOISE_HEX };
    font-weight: 600;

    &:hover {
        color: ${ PINK_HEX };
    }
`;

const StyledLink = styled( Link )`${ linkStyles }`;

export default StyledLink;
