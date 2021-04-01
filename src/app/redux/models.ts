export interface AppState {
	theme: Theme;
	lang?: string;
}

export interface Theme {
	name: string;
	variant: ThemeVariants;
}

export type ThemeVariants = 'light' | 'dark';

// Global store definitions
export interface CustomAction {
	type: string;
	payload?: any;
}

export interface RootStore {
	appState: AppState;
}