
import { setRandomPokemons } from '@app/redux/actions/arena.actions';
import { WorkerService } from '@app/services/worker.service';
import { WorkerList } from '@app/models/worker.model';
import { useWorker } from '@koale/useworker';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import './arena.scss';

const Arena = () => {

	const dispatch = useDispatch();
	const [worker] = useWorker(WorkerService(WorkerList.ARENA).hello)

	dispatch(setRandomPokemons())
	const runSort = async () => {
		const result = await worker('test');
		console.log(result);
	};
	useEffect(() => {
		runSort();
	}, []);

	return (
		<div>
			Arena
		</div>
	);
}

export default Arena;
