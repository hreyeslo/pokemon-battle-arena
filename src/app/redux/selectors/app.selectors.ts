import { AppState, RootStore } from '@app/redux/models';
import { createSelector } from 'reselect'

const appState = (state: RootStore): AppState => state.appState;

export const selectAppTheme = createSelector(appState, ({ theme }) => theme);