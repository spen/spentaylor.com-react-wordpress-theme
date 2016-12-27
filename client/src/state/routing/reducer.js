/**
 * External Dependencies
 */
import { LOCATION_CHANGE } from 'react-router-redux';
import { chain, includes } from 'lodash';

/**
 * Internal Dependencies
 */
import contentPaths from 'constants/contentPaths';
import {
	ROUTING_SET_NEXT_CONTENT_PATH,
	ROUTING_SET_PREVIOUS_CONTENT_PATH,
} from 'state/action-types';

const initialState = {
	locationBeforeTransitions: null,
	currentContentPath: null,
	nextContentPath: null,
	previousContentPath: null,
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
		case ROUTING_SET_NEXT_CONTENT_PATH:
			return {
				...state,
				nextContentPath: action.path,
			};
		case ROUTING_SET_PREVIOUS_CONTENT_PATH:
			return {
				...state,
				previousContentPath: action.path,
			};
		default:
			return state;
	}
}
