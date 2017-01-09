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
import ToggleContent from './ToggleContent';
import { buttonStyler } from './styles/Button';
import StyledHeader from './styles/Header';

const StyledPreviousButton = buttonStyler( PreviousButton );
const StyledNextButton = buttonStyler( NextButton );
const StyledShowIntroButton = buttonStyler( ShowIntroButton );
const StyledShowContentButton = buttonStyler( ShowContentButton );

export const Header = ( { currentContentPath, showContent } ) => (
	<StyledHeader show={ !! currentContentPath || showContent } showContent={ showContent }>
		<StyledPreviousButton showContent={ showContent } />
		<ToggleContent showContent={ showContent } >
			<StyledShowIntroButton showContent={ showContent } />
			<StyledShowContentButton showContent={ showContent } />
		</ToggleContent>
		<StyledNextButton showContent={ showContent } />
	</StyledHeader>
);

export default connect(
	state => ( {
		currentContentPath: getCurrentContentPath( state ),
	} )
)( Header );
