import { Pokemon } from '@app/shared/models/pokeapi.model';

export interface ArenaState {
	render?: RenderTypes | undefined;
	players?: Players | undefined;
}

export type RenderTypes = 'html' | 'canvas';

export type PlayerTypes = 'player' | 'com';

export interface Player {
	name?: string | undefined;
	pokemon?: Pokemon | {};
}

export interface Players {
	player?: Player | undefined;
	com?: Player | undefined;
}

export interface PokemonResult {
	name: string;
	url: string;
}

export interface PokemonList {
	count: number;
	next: string;
	previous?: any;
	results: PokemonResult[];
}