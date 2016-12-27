/**
 * External Dependencies
 */
import styled, { css } from 'styled-components';

const skeletonBarStyles = css`
	backgroundColor: #ddd;
	display: ${ props => props.inline ? 'inline-block' : 'block' };
	height: 1em;
	marginLeft: 1em;
	width: ${ props => props.width ? props.width : '40%' };
	marginBottom: 0;
`;

export default styled.p`${ skeletonBarStyles }`;
