/**
 * External Dependencies
 */
import React, { Component } from 'react';
import RightIcon from 'react-icons/lib/fa/angle-right';
import { Link } from 'react-router';

export default class extends Component {
	render() {
		const { className, showContent } = this.props;

		if ( ! showContent ) {
			return null;
		}

		return (
			<Link className={ className } to={ 'nowhere' }>
				<RightIcon height="100%" />
			</Link>
		);
	}
}
