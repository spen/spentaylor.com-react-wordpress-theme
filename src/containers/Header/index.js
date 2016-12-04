/**
 * External Dependencies
 */
import React from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import { getCurrentContentPath } from 'state/routing/selectors';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import ShowContentButton from './ShowContentButton';
import ShowIntroButton from './ShowIntroButton';
import { buttonStyler } from './styles/Button';
import StyledHeader from './styles/Header';

export const Header = ( { currentContentPath, showContent } ) => {
	const Button = showContent ? ShowIntroButton : ShowContentButton;
	const StyledButton = buttonStyler( Button );
	const StyledPreviousButton = buttonStyler( PreviousButton );
	const StyledNextButton = buttonStyler( NextButton );

	return (
		<StyledHeader show={ !! currentContentPath } showContent={ showContent }>
			<StyledPreviousButton showContent={ showContent } />
			<StyledButton showContent={ showContent } />
			<StyledNextButton showContent={ showContent } />
		</StyledHeader>
	);
};

export default connect(
	state => ( {
		currentContentPath: getCurrentContentPath( state ),
	} )
)( Header );
