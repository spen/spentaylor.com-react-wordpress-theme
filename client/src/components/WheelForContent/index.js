/**
 * External Dependencies
 */
import { debounce } from 'lodash';
import React, { PureComponent } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import { getCurrentContentPath } from 'state/routing/selectors';

const wheelForContent = WrappedComponent => {
	class WheelForContentComponent extends PureComponent {

		constructor(props) {
			super(props);
			this.debouncedNavigate = debounce( this.navigate, 1000, { leading: true } );
			this.handleWheel = this.handleWheel.bind( this );
		}

		navigate() {
			if (this.props.currentContentPath) {
				browserHistory.push(this.props.currentContentPath);
			}
		}

		handleWheel( event ) {
			if ( event.deltaY > 15 ) {
				this.debouncedNavigate();
			}
		};

		render() {
			return <WrappedComponent onWheel={ this.handleWheel } />;
		}
	}

	return connect(
		state => ( {
			currentContentPath: getCurrentContentPath( state ),
		} )
	)( WheelForContentComponent );
}

export default wheelForContent;
