/**
 * External Dependencies
 */
import styled, { css } from 'styled-components';

export const introStyles = css`
    transform: translateY(60px);
    background-color: #244454;
    position: relative;
    height: 50%;
    width: 100%;
    display: table;
    vertical-align: middle;
`;

export const contentStyles = css`
    .cell {
        display: table-cell;
        vertical-align: middle;
    }

    .landing-content {
        vertical-align: middle;
        margin: 0 auto;
        width: 100%;
        text-align: center;
    }
`;

const Intro = styled.div`${ introStyles }`;

export default Intro;
