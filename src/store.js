/**
 * External Dependencies
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

/**
 * Internal Dependencies
 */
import createReducer from './reducers';

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
