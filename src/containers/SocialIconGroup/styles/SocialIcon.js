/**
 * External Dependencies
 */
import styled, { css } from 'styled-components';

export const socialIconStyles = css`
    color: #00c8b4;
    opacity: 0.5;
    display: inline-block;
    margin: 5px;
    margin-top: 10px;

    &:hover {
        opacity: 0.8;
    }

`;

const SocialIcon = styled.a`${ socialIconStyles }`;

export default SocialIcon;
