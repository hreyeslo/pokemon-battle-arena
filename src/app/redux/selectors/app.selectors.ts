import { AppState, Languages, Player, RenderTypes, RootState, Theme } from '@app/redux/models';
import { createSelector } from 'reselect'

const appState = (state: RootState): AppState => state.appState;

export const selectAppTheme = createSelector(appState, ({ theme }): Theme => theme);
export const selectAppLang = createSelector(appState, ({ i18n }): Languages | undefined => i18n?.lang);
export const selectAppSupportedLangs = createSelector(appState, ({ i18n }): Languages[] => i18n?.supported || []);
export const selectAppRenderMode = createSelector(appState, ({ render }): RenderTypes | undefined => render);
export const selectAppPlayer = createSelector(appState, ({ player }): Player | undefined => player);