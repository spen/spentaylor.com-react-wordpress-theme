/**
 * External Dependencies
 */
import React, { Component } from 'react';
import LeftIcon from 'react-icons/lib/fa/angle-left';
import { Link } from 'react-router';

export default class extends Component {
	render() {
		const { className, showContent } = this.props;

		if ( ! showContent ) {
			return null;
		}

		return (
			<Link className={ className } to={ 'nowhere' }>
				<LeftIcon height="100%" />
			</Link>
		);
	}
}
