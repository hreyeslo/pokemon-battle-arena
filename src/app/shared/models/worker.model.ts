import { Pokemon } from '@app/shared/models/pokeapi.model';

export enum WorkerList {
	ARENA = 'getArenaWorkerInstance'
}

export interface ArenaWorkerDef {
	getPokemonMoves(pokemons: Pokemon[]): Pokemon[];
}