/**
 * External Dependencies
 */
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

/**
 * Internal Dependencies
 */
import InputField from 'components/InputField';
import SubmitButton from 'components/SubmitButton';
import TextareaField from 'components/TextareaField';
import { submitContactForm } from 'state/form/contactForm/actions';
import validate from './validate';

const Form = ( { handleSubmit, invalid, submitContactForm, submitting } ) => (
	<div>
		<h2>Say Hello!</h2>
		<form onSubmit={ handleSubmit( submitContactForm ) }>
			<Field name="name" type="text" component={ InputField } placeholder="Name" />
			<Field name="email" type="email" component={ InputField } placeholder="Email" />
			<Field name="message" component={ TextareaField } placeholder="What's up?" />
			<SubmitButton disabled={ submitting || invalid }>Fire Away!</SubmitButton>

		</form>
	</div>
);

export default compose(
	connect(
		null,
		{ submitContactForm }
	),
	reduxForm( {
		form: 'contactForm',
		validate,
	} )
)( Form );
