
import { setRandomPokemons } from '@app/redux/actions/arena.actions';
import { WorkerService } from '@app/shared/services/worker.service';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import './arena.scss';

const Arena = () => {

	const dispatch = useDispatch();
	const arenaWorker = WorkerService.getArenaWorkerInstance();
	const arenaWorker2 = WorkerService.getArenaWorkerInstance();

	dispatch(setRandomPokemons());

	const runSort = async () => {
		const result = await arenaWorker.hello('from worker');
		const result2 = await arenaWorker2.hello('from worker2');
		console.log(result);
		console.log(result2);
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
