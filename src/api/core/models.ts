export interface Controller {
	new(...args: any[]): any;
}

export type Controllers = Controller[];

export interface ControllerHashMap {
	[key: string]: {
		methods: {
			[key: string]: ControllerHashMapRegisty;
		};
		path: string;
	};
}

export interface ControllerHashMapRegisty {
	config: RegisterDecoratorConfig;
	callback: () => void;
}

export interface RegisterDecoratorConfig {
	type: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	path?: string;
	schema?: {
		[key: string]: any;
	};
}

export type LoggerCustomMethods = 'listening';