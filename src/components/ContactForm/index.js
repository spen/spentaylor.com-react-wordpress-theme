/**
 * External Dependencies
 */
import { noop } from 'lodash';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

/**
 * Internal Dependencies
 */
import InputField from 'components/InputField';

const Form = () => (
	<form onSubmit={ noop }>
		<Field name="name" type="text" component={ InputField } placeholder="Name" />
		<Field name="email" type="email" component={ InputField } placeholder="Email" />
		<button type="submit">Fire Away!</button>
	</form>
);

export default reduxForm( {
	form: 'contactForm',
} )( Form );
