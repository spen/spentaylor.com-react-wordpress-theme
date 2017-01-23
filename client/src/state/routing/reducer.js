/**
 * External Dependencies
 */
import { LOCATION_CHANGE } from 'react-router-redux';
import {
	compact,
	first,
	flowRight as compose,
	split,
	includes,
} from 'lodash';

/**
 * Internal Dependencies
 */
import contentPaths from 'constants/contentPaths';

const initialState = {
	locationBeforeTransitions: null,
	currentContentPath: null,
	nextContentPath: null,
	previousContentPath: null,
	currentPageNamespace: null,
};

const getContentPathSegment = path => (
	compose(
		first,
		compact,
		path => split( path, '/' )
	)( path )
);

export default function( state = initialState, action ) {
	switch ( action.type ) {
		case LOCATION_CHANGE: {
			const newState = {
				...state,
				locationBeforeTransitions: action.payload,
			};
			const pageNamespace = getContentPathSegment( action.payload.pathname );

			newState.currentPageNamespace = pageNamespace;

			if ( action.payload.pathname && includes( contentPaths, pageNamespace ) ) {
				newState.currentContentPath = action.payload.pathname;
			}

			return newState;
		}
		default:
			return state;
	}
}
