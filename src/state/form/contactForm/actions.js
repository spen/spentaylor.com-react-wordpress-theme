/**
 * Internal Dependencies
 */
import {
	CONTACT_FORM_SUBMIT,
} from 'state/action-types';

export function submitContactForm( payload ) {
	return {
		type: CONTACT_FORM_SUBMIT,
		payload,
	};
}
