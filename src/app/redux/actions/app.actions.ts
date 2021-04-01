import { CustomAction, I18n, Player, RenderTypes, ThemeNames, ThemeVariants } from '@app/redux/models';
import { REDUX_CONSTANTS } from '@app/redux/constants';

export const setAppTheme = (payload: ThemeNames): CustomAction => ({ type: REDUX_CONSTANTS.APP.SET_THEME, payload });
export const setAppThemeVariant = (payload: ThemeVariants): CustomAction => ({ type: REDUX_CONSTANTS.APP.SET_THEME_VARIANT, payload });
export const setAppI18n = (payload: Partial<I18n>): CustomAction => ({ type: REDUX_CONSTANTS.APP.SET_I18N, payload });
export const setRenderMode = (payload: RenderTypes): CustomAction => ({ type: REDUX_CONSTANTS.APP.SET_RENDER_MODE, payload });
export const setPlayer = (payload: Partial<Player>): CustomAction => ({ type: REDUX_CONSTANTS.APP.SET_PLAYER, payload });