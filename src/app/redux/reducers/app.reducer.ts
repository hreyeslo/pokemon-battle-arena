
import { AppState, CustomAction, ThemeNames, ThemeVariants } from '@app/redux/models';
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
		case REDUX_CONSTANTS.APP.SET_I18N:
			return {
				...state, i18n: {
					...state.i18n,
					...payload
				}
			};
		case REDUX_CONSTANTS.APP.SET_RENDER_MODE:
			return { ...state, render: payload };
		case REDUX_CONSTANTS.APP.SET_PLAYER:
			return {
				...state, player: {
					...state.player,
					...payload
				}
			};
		default:
			return state;
	}
};

// Utils

const updateTheme = (state: AppState, update: { [key: string]: ThemeNames | ThemeVariants }): AppState => {
	return { ...state, theme: { ...state?.theme || initialAppState.theme, ...update } };
};