import { setComDataKO, setComDataOK, setPlayerDataKO, setPlayerDataOK } from '@app/redux/actions/arena.actions';
import { PokemonList, PokemonResult } from '@app/redux/models/arena.model';
import { PokeApiService } from '@app/services/pokeapi.service';
import { REDUX_CONSTANTS } from '@app/redux/constants';
import { Pokemon } from '@app/models/pokeapi.model';
import { put, takeEvery } from 'redux-saga/effects';
import { getRandomNumber } from '@app/utils/utils';

function* fetchRandomPokemon() {
	try {

		const { count, results }: PokemonList = yield PokeApiService.getPokemonsList({
			offset: 0,
			limit: -1
		});
		const playerPokemonIndex = getRandomNumber(0, count - 1);
		const comPokemonIndex = getRandomNumber(0, count - 1);

		const playerPokemonRef: PokemonResult = results[playerPokemonIndex];
		const comPokemonRef: PokemonResult = results[comPokemonIndex];

		const pokemons: Pokemon[] = yield PokeApiService.resource([playerPokemonRef.url, comPokemonRef.url]);

		yield put(setPlayerDataOK(pokemons[0]));
		yield put(setComDataOK({ name: 'COM', pokemon: pokemons[1] }));

	} catch (e) {

		yield put(setPlayerDataKO());
		yield put(setComDataKO());
		console.log(e);

	}
}

export function* arenaEffects() {
	yield takeEvery(REDUX_CONSTANTS.ARENA.REQUEST.GET_RANDOM_POKEMON, fetchRandomPokemon);
}