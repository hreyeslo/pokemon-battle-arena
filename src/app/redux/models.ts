export interface AppState {
	theme: Theme;
	lang?: Languages | undefined;
	render?: RenderTypes | undefined;
	player?: Player | undefined;
}

export interface Theme {
	name: ThemeNames;
	variant: ThemeVariants;
}

export interface Player {
	alias: string;
}

export type ThemeNames = 'default' | 'custom';

export type ThemeVariants = 'light' | 'dark';

export type Languages = 'en-US' | 'es-ES';

export type RenderTypes = 'html' | 'canvas';

// Global store definitions
export interface CustomAction {
	type: string;
	payload?: any;
}

export interface RootState {
	appState: AppState;
}