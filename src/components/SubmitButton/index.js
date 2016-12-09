/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import Button from 'components/Button';

export default ( { children } ) => (
	<Button
		type="submit"
		mainColor="#ff5a6e"
		shadowColor="#ff0e2b"
	>
		{ children }
	</Button>
);
