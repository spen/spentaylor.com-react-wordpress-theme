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
    text-align: center;
    color: white;
`;

const Intro = styled.div`${ introStyles }`;

export default Intro;
