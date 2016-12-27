/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import Input from 'components/Input';

export default ( { input, label, meta: { touched, error }, placeholder, type } ) => (
	<div>
		{ label && <label>{ label }:</label> }
		<Input { ...input } type={ type } placeholder={ placeholder } error={ touched && error } />
	</div>
);
