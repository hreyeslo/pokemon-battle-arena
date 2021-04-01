import { CustomAction, ThemeVariants } from '@app/redux/models';
import { REDUX_CONSTANTS } from '@app/redux/constants';

export const setAppTheme = (payload: string): CustomAction => ({ type: REDUX_CONSTANTS.APP.SET_THEME, payload });
export const setAppThemeVariant = (payload: ThemeVariants): CustomAction => ({ type: REDUX_CONSTANTS.APP.SET_THEME_VARIANT, payload });
export const setAppLang = (payload: string): CustomAction => ({ type: REDUX_CONSTANTS.APP.SET_LANG, payload });