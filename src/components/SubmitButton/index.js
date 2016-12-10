/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import Button from 'components/Button';

export default ( { children, disabled } ) => (
	<Button
		type="submit"
		mainColor="#ff5a6e"
		shadowColor="#ff0e2b"
		disabled={ disabled }
	>
		{ children }
	</Button>
);
