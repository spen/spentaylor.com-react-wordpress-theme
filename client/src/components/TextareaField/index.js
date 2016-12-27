/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import Textarea from 'components/Textarea';

const TextareaField = ( {
	input,
	label,
	maxRows,
	meta: { touched, error },
	minRows,
	placeholder,
} ) => (
	<div>
		{ label && <label>{ label }:</label> }
		<Textarea
			{ ...input }
			error={ touched && error }
			maxRows={ maxRows }
			minRows={ minRows }
			placeholder={ placeholder }
		/>
	</div>
);

TextareaField.defaultProps = {
	maxRows: 8,
	minRows: 4,
};

export default TextareaField;
