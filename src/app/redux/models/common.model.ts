import { ArenaState } from '@app/redux/models/arena.model';
import { AppState } from '@app/redux/models/app.model';

export interface CustomAction {
	type: string;
	payload?: any;
}

export interface RootState {
	appState: AppState;
	arenaState: ArenaState;
}