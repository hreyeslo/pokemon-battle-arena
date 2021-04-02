import { AppState, Languages, Theme } from '@app/redux/models/app.model';
import { RootState } from '@app/redux/models/common.model';
import { createSelector } from 'reselect'

const appState = (state: RootState): AppState => state.appState;

export const selectAppTheme = createSelector(appState, ({ theme }): Theme => theme);
export const selectAppLang = createSelector(appState, ({ i18n }): Languages | undefined => i18n?.lang);
export const selectAppSupportedLangs = createSelector(appState, ({ i18n }): Languages[] => i18n?.supported || []);