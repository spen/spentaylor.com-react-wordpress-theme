/**
 * External Dependencies
 */
import styled, { css } from 'styled-components';

export const introStyles = css`
    transform: translateY(60px);
    background-color: #202832;
  	background-repeat: no-repeat, repeat;
  	background-size: cover;
  	background-position: center;
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
