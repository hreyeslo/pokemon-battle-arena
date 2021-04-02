
import { setRandomPokemons } from '@app/redux/actions/arena.actions';
import { useDispatch } from 'react-redux';
import React from 'react';
import './arena.scss';

const Arena = () => {

	const dispatch = useDispatch();

	dispatch(setRandomPokemons())

	return (
		<div>
			Arena
		</div>
	);
}

export default Arena;
