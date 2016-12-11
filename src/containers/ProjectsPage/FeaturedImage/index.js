/**
 * External Dependencies
 */
import styled from 'styled-components';

export default styled.div`
	background-color: #999;
	background-image: url(${ props => props.src });
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	padding-bottom: 62.5%;
`;
