export interface AppState {
	theme: Theme;
	i18n?: I18n | undefined;
}

export interface Theme {
	name: ThemeNames;
	variant: ThemeVariants;
}

export interface I18n {
	lang: Languages;
	supported: Languages[];
}

export type ThemeNames = 'default' | 'custom';

export type ThemeVariants = 'light' | 'dark';

export type Languages = 'en-US' | 'es-ES';