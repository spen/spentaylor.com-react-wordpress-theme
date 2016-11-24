/**
 * External Dependencies
 */
import { LOCATION_CHANGE } from 'react-router-redux';
import { chain, includes } from 'lodash';

/**
 * Internal Dependencies
 */
import contentPaths from 'constants/contentPaths';

const initialState = {
	locationBeforeTransitions: null,
};

function getContentPathSegment( path ) {
	return chain( path )
		.split( '/' )
		.compact()
		.first()
		.value();
}

export default function( state = initialState, action ) {
	switch ( action.type ) {
		case LOCATION_CHANGE: {
			const newState = {
				...state,
				locationBeforeTransitions: action.payload,
			};
			const contentPath = getContentPathSegment( action.payload.pathname );

			if (
				action.payload.pathname &&
				includes( contentPaths, contentPath )
			) {
				newState.currentContentPath = action.payload.pathname;
			}

			return newState;
		}
		default:
			return state;
	}
}
