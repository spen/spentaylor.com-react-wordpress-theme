/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import ShowContentButton from './ShowContentButton';
import ShowIntroButton from './ShowIntroButton';
import { buttonStyler } from './styles/Button';
import StyledHeader from './styles/Header';

export class Header extends Component {
	render() {
		const { showContent } = this.props;
		const isVisible = !! this.props.previousContentPath;
		const Button = showContent ? ShowIntroButton : ShowContentButton;
		const StyledButton = buttonStyler( Button );

		return (
			<StyledHeader show={ isVisible } showContent={ showContent }>
				<StyledButton showContent={ showContent } />
			</StyledHeader>
		);
	}
}

function mapStateToProps( state ) {
	const previousContentPath = state.routing.previousContentPath;

	return {
		previousContentPath,
	};
}

export default connect( mapStateToProps )( Header );
