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
import SubmitButton from 'components/SubmitButton';

const Form = () => (
	<form onSubmit={ noop }>
		<Field name="name" type="text" component={ InputField } placeholder="Name" />
		<Field name="email" type="email" component={ InputField } placeholder="Email" />
		<SubmitButton>Fire Away!</SubmitButton>
	</form>
);

export default reduxForm( {
	form: 'contactForm',
} )( Form );
