/**
 * External Dependencies
 */
import styled, { css } from 'styled-components';

const headerHeight = '60px';

export const headerStyles = css`
	transition: background-color 0.5s ease;
	height: ${ headerHeight }
	width: 100%;
	text-align: center;
    overflow: hidden;
    position: relative;
    margin-top: 0;
    z-index: 200;
    opacity: ${ props => props.show ? 1 : 0 };
    background-color: ${ props => props.intro ? 'rgba(0,0,0,0.1)' : 'rgba(255,90,110,1)' };
`;

const Header = styled.div`${ headerStyles }`;

export default Header;
