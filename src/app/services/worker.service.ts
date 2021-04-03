import { ArenaWorker } from '@app/workers/arena.worker';
import { WorkerList } from '@app/models/worker.model';

class WorkerServiceManager {

	private static _instance: WorkerServiceManager;

	private static _workers = {
		[WorkerList.ARENA]: ArenaWorker
	}

	constructor() {
		if (WorkerServiceManager._instance) {
			throw new Error('Error - use WorkerServiceManager.getInstance()');
		}
	}

	public static getInstance(name: WorkerList) {
		if (!WorkerServiceManager._instance) {
			WorkerServiceManager._instance = new WorkerServiceManager();
		}
		return WorkerServiceManager._workers[name];
	}

}

export const WorkerService = (name: WorkerList) => WorkerServiceManager.getInstance(name);