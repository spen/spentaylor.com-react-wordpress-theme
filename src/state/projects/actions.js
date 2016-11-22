/**
 * Internal Dependencies
 */
import { PROJECTS_RECEIVE } from 'state/action-types';

export function recieveProjects( payload ) {
	return {
		type: PROJECTS_RECEIVE,
		payload,
	};
}
