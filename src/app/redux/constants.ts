export const REDUX_CONSTANTS = {
	APP: {
		SET_THEME: '[APP] - Setting theme',
		SET_THEME_VARIANT: '[APP] - Setting theme variant',
		SET_I18N: '[APP] - Setting i18n'
	},
	ARENA: {
		SET_RENDER_MODE: '[ARENA] - Setting render mode',
		SET_PLAYER_NAME: '[ARENA] - Setting player name',
		REQUEST: {
			GET_RANDOM_POKEMON: '[ARENA] - Getting random pokemon'
		},
		RESPONSE: {
			OK: {
				SET_PLAYER_DATA: '[ARENA OK] - Setting player data',
				SET_COM_DATA: '[ARENA OK] - Setting com data',
			},
			KO: {
				SET_PLAYER_DATA: '[ARENA KO] - Setting player data',
				SET_COM_DATA: '[ARENA KO] - Setting com data',
			}
		}
	}
};