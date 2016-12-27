export const validEmail = email => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test( email );

export default ( { email, message, name } ) => {
	const errors = {};

	if ( ! email ) {
		errors.email = 'Required';
	} else if ( ! validEmail( email ) ) {
		errors.email = 'Invalid email address';
	}

	if ( ! message ) {
		errors.message = 'Required';
	}

	if ( ! name ) {
		errors.name = 'Required';
	}

	return errors;
};
