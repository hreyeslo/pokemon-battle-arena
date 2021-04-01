import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, Store } from 'redux';
import { RootState } from '@app/redux/models';
import { merge } from 'lodash';

import { initialAppState, appReducer } from '@app/redux/reducers/app.reducer';

export class GlobalStore {

	private static _instance: Store;

	private static readonly _initialState: RootState = {
		appState: initialAppState
	};

	private static readonly _reducers = {
		appState: appReducer
	};

	constructor(initialState: Partial<RootState> = {}) {
		GlobalStore._instance = createStore(
			combineReducers(GlobalStore._reducers),
			merge({}, GlobalStore._initialState, initialState),
			composeWithDevTools()
		)
	}

	public static getInstance(initialState: Partial<RootState> = {}): Store {
		if (!GlobalStore._instance) {
			new GlobalStore(initialState);
		}
		return GlobalStore._instance;
	}

}