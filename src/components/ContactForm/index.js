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
import TextareaField from 'components/TextareaField';

const Form = () => (
	<form onSubmit={ noop }>
		<Field name="name" type="text" component={ InputField } placeholder="Name" />
		<Field name="email" type="email" component={ InputField } placeholder="Email" />
		<Field name="message" component={ TextareaField } placeholder="What's up?" />
		<SubmitButton>Fire Away!</SubmitButton>
	</form>
);

export default reduxForm( {
	form: 'contactForm',
} )( Form );
