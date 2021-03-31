import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore } from 'redux';
import { RootStore } from '@app/redux/models';
import { merge } from 'lodash';

import { initialAppState, appReducer } from '@app/redux/reducers/app.reducer';

const _initialState: RootStore = {
	appState: initialAppState
};

const _reducers = {
	appState: appReducer
};

export const initStore = (initialState: Partial<RootStore> = {}) => createStore(
	combineReducers(_reducers),
	merge({}, _initialState, initialState),
	composeWithDevTools()
);