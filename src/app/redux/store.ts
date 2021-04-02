import { combineReducers, createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState } from '@app/redux/models/common.model';
import { merge } from 'lodash';

import { initialArenaState, arenaReducer } from '@app/redux/reducers/arena.reducer';
import { initialAppState, appReducer } from '@app/redux/reducers/app.reducer';

import { arenaEffects } from '@app/redux/effects/arena.effects';

class StoreServiceManager {

	private static _instance: Store;

	private readonly _sagaMiddlewareInstance: SagaMiddleware;

	private readonly _initialState: RootState = {
		appState: initialAppState,
		arenaState: initialArenaState
	};

	private readonly _reducers = {
		appState: appReducer,
		arenaState: arenaReducer
	};

	private readonly _effects = [
		arenaEffects
	];

	constructor(initialState: Partial<RootState> = {}) {
		if (StoreServiceManager._instance) {
			throw new Error('Error - use StoreServiceManager.getInstance()');
		}
		this._sagaMiddlewareInstance = createSagaMiddleware();
		StoreServiceManager._instance = createStore(
			combineReducers(this._reducers),
			merge({}, this._initialState, initialState),
			composeWithDevTools(
				applyMiddleware(
					this._sagaMiddlewareInstance
				)
			)
		);
		this._initSagas();
	}

	private _initSagas() {
		this._effects.forEach(effect => this._sagaMiddlewareInstance.run(effect))
	}

	public static getInstance(initialState: Partial<RootState> = {}): Store {
		if (!StoreServiceManager._instance) {
			new StoreServiceManager(initialState);
		}
		return StoreServiceManager._instance;
	}

}

export const StoreService = StoreServiceManager.getInstance();