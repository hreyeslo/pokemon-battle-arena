import { Pokedex } from 'pokeapi-js-wrapper';

class PokeApiServiceManager {

	private static _instance: Pokedex;

	private readonly _options = {
		timeout: 5 * 1000,
		cacheImages: true
	}

	constructor() {
		if (PokeApiServiceManager._instance) {
			throw new Error('Error - use PokeApiServiceManager.getInstance()');
		}
		PokeApiServiceManager._instance = new Pokedex(this._options);
	}

	public static getInstance(): Pokedex {
		if (!PokeApiServiceManager._instance) {
			new PokeApiServiceManager();
		}
		return PokeApiServiceManager._instance;
	}

}

export const PokeApi = PokeApiServiceManager.getInstance();