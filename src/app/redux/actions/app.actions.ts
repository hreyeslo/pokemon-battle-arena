import { I18n, ThemeNames, ThemeVariants } from '@app/redux/models/app.model';
import { CustomAction } from '@app/redux/models/common.model';
import { REDUX_CONSTANTS } from '@app/redux/constants';

export const setAppTheme = (payload: ThemeNames): CustomAction => ({ type: REDUX_CONSTANTS.APP.SET_THEME, payload });
export const setAppThemeVariant = (payload: ThemeVariants): CustomAction => ({ type: REDUX_CONSTANTS.APP.SET_THEME_VARIANT, payload });
export const setAppI18n = (payload: Partial<I18n>): CustomAction => ({ type: REDUX_CONSTANTS.APP.SET_I18N, payload });