/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import Textarea from 'components/Textarea';

const TextareaField = ( { input, label, maxRows, minRows, placeholder } ) => (
	<div>
		{ label && <label>{ label }:</label> }
		<Textarea
			{ ...input }
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
