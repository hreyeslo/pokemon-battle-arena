
import { AppState, CustomAction } from '@app/redux/models';
import { REDUX_CONSTANTS } from '@app/redux/constants';

export const initialAppState: AppState = {
	theme: {
		name: 'default',
		variant: 'light'
	}
};

export const appReducer = (state: AppState = initialAppState, { type, payload }: CustomAction): AppState => {
	switch (type) {
		case REDUX_CONSTANTS.APP.SET_THEME:
			return updateTheme(state, { name: payload });
		case REDUX_CONSTANTS.APP.SET_THEME_VARIANT:
			return updateTheme(state, { variant: payload });
		case REDUX_CONSTANTS.APP.SET_LANG:
			return { ...state, lang: payload };
		default:
			return state;
	}
};

// Utils

const updateTheme = (state: AppState, update: { [key: string]: string }): AppState => {
	return { ...state, theme: { ...state?.theme || initialAppState.theme, ...update } };
};