/**
 * External Dependencies
 */
import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';

export default styled( Textarea )`
	border: none;
	overflow: auto;
    outline: none;
	background-color: white;
	box-shadow: 0 4px 0 rgba(0, 0, 0, 0.1);
	width: 100%;
    margin: 8px auto;
	padding: 0.7em 0.6em;
	resize: none;
`;
