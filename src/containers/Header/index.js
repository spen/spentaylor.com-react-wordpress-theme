/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import ShowContentButton from './ShowContentButton';
import ShowIntroButton from './ShowIntroButton';
import { buttonStyler } from './styles/Button';
import StyledHeader from './styles/Header';

export class Header extends Component {
	render() {
		const { showContent } = this.props;
		const isVisible = !! this.props.currentContentPath;
		const Button = showContent ? ShowIntroButton : ShowContentButton;

		const StyledButton = buttonStyler( Button );
		const StyledPreviousButton = buttonStyler( PreviousButton );
		const StyledNextButton = buttonStyler( NextButton );

		return (
			<StyledHeader show={ isVisible } showContent={ showContent }>
				<StyledPreviousButton showContent={ showContent } />
				<StyledButton showContent={ showContent } />
				<StyledNextButton showContent={ showContent } />
			</StyledHeader>
		);
	}
}

function mapStateToProps( state ) {
	const currentContentPath = state.routing.currentContentPath;

	return {
		currentContentPath,
	};
}

export default connect( mapStateToProps )( Header );
