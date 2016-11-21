/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import BarsIcon from 'react-icons/lib/fa/bars';

export class ShowContentButton extends Component {
	render() {
		return (
			<IndexLink to="/"><BarsIcon /></IndexLink>
		);
	}
}

export default ShowContentButton;
