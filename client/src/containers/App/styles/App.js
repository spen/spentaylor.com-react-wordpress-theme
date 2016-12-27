/**
 * External Dependencies
 */
import styled, { css } from 'styled-components';

const headerOffset = '-60px';
const transitionTime = '0.5s';

export const pageWrapStyles = css`
    transform: translate(0%, ${ props => props.open ? '-50%' : headerOffset });
    transition: all ${ transitionTime } ease;
    height: 200%;
`;

const PageWrap = styled.div`${ pageWrapStyles }`;

export default PageWrap;
