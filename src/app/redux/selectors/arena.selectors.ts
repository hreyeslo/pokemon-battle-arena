import { ArenaState, Player, Players, PlayerTypes, RenderTypes } from '@app/redux/models/arena.model';
import { RootState } from '@app/redux/models/common.model';
import { createSelector } from 'reselect'

const arenaState = (state: RootState): ArenaState => state.arenaState;

export const selectArenaRenderMode = createSelector(arenaState, ({ render }): RenderTypes | undefined => render);
export const selectArenaPlayer = (type: PlayerTypes) => createSelector(arenaState, ({ players }): Player | undefined => players && players[type]);