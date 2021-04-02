import { ArenaState, Player, PlayerTypes } from '@app/redux/models/arena.model';
import { CustomAction } from '@app/redux/models/common.model';
import { REDUX_CONSTANTS } from '@app/redux/constants';

export const initialArenaState: ArenaState = {};

export const arenaReducer = (state: ArenaState = initialArenaState, { type, payload }: CustomAction): ArenaState => {
	switch (type) {
		case REDUX_CONSTANTS.ARENA.SET_RENDER_MODE:
			return { ...state, render: payload };
		case REDUX_CONSTANTS.ARENA.SET_PLAYER_NAME:
			return updatePlayer('player', state, { name: payload });
		case REDUX_CONSTANTS.ARENA.RESPONSE.OK.SET_PLAYER_DATA:
		case REDUX_CONSTANTS.ARENA.RESPONSE.KO.SET_PLAYER_DATA:
			return updatePlayer('player', state, { pokemon: payload });
		case REDUX_CONSTANTS.ARENA.RESPONSE.OK.SET_COM_DATA:
		case REDUX_CONSTANTS.ARENA.RESPONSE.KO.SET_COM_DATA:
			return updatePlayer('com', state, payload);
		default:
			return state;
	}
};

// Utils

const updatePlayer = (type: PlayerTypes, state: ArenaState, update: { [key: string]: Player }): ArenaState => {
	return {
		...state, players: {
			...state?.players || {},
			[type]: {
				...(state.players && state.players[type]) || {},
				...update
			}
		}
	};
};