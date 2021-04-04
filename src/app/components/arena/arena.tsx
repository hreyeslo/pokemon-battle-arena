
import { SelectBattleData } from '@app/redux/selectors/arena.selectors';
// import { WorkerService } from '@app/shared/services/worker.service';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import './arena.scss';

const Arena = () => {

	// const arenaWorker = WorkerService.getArenaWorkerInstance()
	const battleData = useSelector(SelectBattleData);


	useEffect(() => {
		console.log(battleData);
	}, []);

	return (
		<div>
			Arena
		</div>
	);
}

export default Arena;
