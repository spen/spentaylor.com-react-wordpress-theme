/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';

/**
 * Internal Dependencies
 */
import { getPreviousContentPath } from 'state/routing/selectors';
import Link from './Link';

const showState = { left: spring( 0 ) };
const hideState = { left: spring( -60 ) };

export class PreviousButton extends Component {

	shouldComponentUpdate( nextProps ) {
		return !! nextProps.targetPath !== !! this.props.targetPath;
	}

	render() {
		const show = !! this.props.targetPath;

		return (
			<Motion style={ show ? showState : hideState } >
				{ ( { left } ) => (
					<div
						style={ {
							position: 'absolute',
							left: `${ left }px`,
							top: 0,
						} }
					>
						<Link { ...this.props } />
					</div>
				) }
			</Motion>
		);
	}
}

export default connect(
	state => ( {
		targetPath: getPreviousContentPath( state ),
	} )
)( PreviousButton );
