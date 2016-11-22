/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import BarsIcon from 'react-icons/lib/fa/bars';

export class ShowContentButton extends Component {
	render() {
		const { className } = this.props;
		return (
			<IndexLink className={ className } to="/">
				<BarsIcon height="100%" />
			</IndexLink>
		);
	}
}

export default ShowContentButton;
