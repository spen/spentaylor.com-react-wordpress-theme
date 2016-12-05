/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';

/**
 * Internal Dependencies
 */
import { getNextContentPath } from 'state/routing/selectors';
import Link from './Link';

const showState = { right: spring( 0 ) };
const hideState = { right: spring( -60 ) };

export class NextButton extends Component {

	shouldComponentUpdate( nextProps ) {
		return !! nextProps.targetPath !== !! this.props.targetPath;
	}

	render() {
		const show = !! this.props.targetPath;

		return (
			<Motion style={ show ? showState : hideState } >
				{ ( { right } ) => (
					<div
						style={ {
							position: 'absolute',
							right: `${ right }px`,
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
		targetPath: getNextContentPath( state ),
	} )
)( NextButton );
