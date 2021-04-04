export enum WorkerList {
	ARENA = 'getArenaWorkerInstance'
}

export interface ArenaWorkerDef {
	hello(name: string): string;
}