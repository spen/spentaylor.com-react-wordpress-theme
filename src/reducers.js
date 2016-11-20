/**
 * External Dependencies
 */
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

export default function createReducer( asyncReducers ) {
	return combineReducers( {
		routing: routerReducer,
		...asyncReducers,
	} );
}
