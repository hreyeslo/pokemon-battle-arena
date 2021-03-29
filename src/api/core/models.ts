export interface Route {
	controller: any;
	path: string;
}

export type Routes = Route[];

export interface ControllerHashMap {
	[key: string]: {
		[key: string]: ControllerHashMapRegisty;
	};
}

export interface ControllerHashMapRegisty {
	config: RegisterDecoratorConfig;
	method: () => void;
}

export interface RegisterDecoratorConfig {
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	path?: string;
	schema?: {
		[key: string]: any;
	};
}