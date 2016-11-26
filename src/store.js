/**
 * External Dependencies
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { each } from 'lodash';

/**
 * Internal Dependencies
 */
import createReducer from './reducers';
import blogSagas from 'state/blog/sagas';
import projectsSagas from 'state/projects/sagas';

const sagaMiddleware = createSagaMiddleware();

export default function( initialState = {}, history ) {
	const middlewares = [
		sagaMiddleware,
		routerMiddleware( history ),
	];

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore(
		createReducer(),
		initialState,
		composeEnhancers( applyMiddleware( ...middlewares ) )
	);

	// Extensions
	store.runSaga = sagaMiddleware.run;

	each( blogSagas, saga => {
		sagaMiddleware.run( saga );
	} );

	each( projectsSagas, saga => {
		sagaMiddleware.run( saga );
	} );

	// Make reducers hot reloadable, see http://mxs.is/googmo
	if ( module.hot ) {
		module.hot.accept( './reducers', () => {
			System.import( './reducers' ).then( reducerModule => {
				const createReducers = reducerModule.default;
				const nextReducers = createReducers( store.asyncReducers );

				store.replaceReducer( nextReducers );
			} );
		} );
	}

	return store;
}
