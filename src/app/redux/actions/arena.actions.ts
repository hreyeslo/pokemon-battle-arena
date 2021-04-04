import { Player, RenderTypes } from '@app/redux/models/arena.model';
import { CustomAction } from '@app/redux/models/common.model';
import { Pokemon } from '@app/shared/models/pokeapi.model';
import { REDUX_CONSTANTS } from '@app/redux/constants';

export const setRenderMode = (payload: RenderTypes): CustomAction => ({ type: REDUX_CONSTANTS.ARENA.SET_RENDER_MODE, payload });
export const setPlayerName = (payload: string): CustomAction => ({ type: REDUX_CONSTANTS.ARENA.SET_PLAYER_NAME, payload });

export const setRandomPokemons = (): CustomAction => ({ type: REDUX_CONSTANTS.ARENA.REQUEST.GET_RANDOM_POKEMON });
export const setPlayerDataOK = (payload: Pokemon): CustomAction => ({ type: REDUX_CONSTANTS.ARENA.RESPONSE.OK.SET_PLAYER_DATA, payload });
export const setPlayerDataKO = (): CustomAction => ({ type: REDUX_CONSTANTS.ARENA.RESPONSE.OK.SET_PLAYER_DATA, payload: {} });
export const setComDataOK = (payload: Player): CustomAction => ({ type: REDUX_CONSTANTS.ARENA.RESPONSE.OK.SET_COM_DATA, payload });
export const setComDataKO = (): CustomAction => ({ type: REDUX_CONSTANTS.ARENA.RESPONSE.OK.SET_COM_DATA, payload: { name: 'COM', pokemon: {} } });