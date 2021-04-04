import { WorkerList, ArenaWorkerDef } from '@app/shared/models/worker.model';

import * as ArenaWorker from '@app/shared/workers/arena.worker';

class WorkerServiceManager {

	private static _instance: WorkerServiceManager;

	private static _workers = new Map();

	constructor() {
		if (WorkerServiceManager._instance) {
			throw new Error('Error - use WorkerServiceManager.getInstance()');
		}
	}

	public static getInstance<T>(name: WorkerList, worker): T {
		if (!WorkerServiceManager._instance) {
			WorkerServiceManager._instance = new WorkerServiceManager();
		}
		if (!WorkerServiceManager._workers.has(name)) {
			WorkerServiceManager._workers.set(name, WorkerServiceManager._createWorker<T>(worker));
		}
		return WorkerServiceManager._workers.get(name);
	}

	private static _createWorker<T>(workerPath: T): T {
		// eslint-disable-next-line
		return (workerPath as any)();
	}

}

export const WorkerService = {
	[WorkerList.ARENA]: () => WorkerServiceManager.getInstance<ArenaWorkerDef>(WorkerList.ARENA, ArenaWorker)
}

