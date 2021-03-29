import { ControllerHashMap, ControllerHashMapRegisty, RegisterDecoratorConfig } from "@api/core/models";
import { ScopedLogger } from "@api/core/logger";
import { get, merge } from 'lodash';

export class RootController {

	private static _instance: RootController;

	private _hashMap: ControllerHashMap = {};

	constructor() { }

	public static getInstance(): RootController {
		if (!RootController._instance) {
			RootController._instance = new RootController();
		}
		return RootController._instance;
	}

	public addPathToController(controllerName: string, path: string): void {
		this._hashMap[controllerName] = merge(this._hashMap[controllerName], { path })
	}

	public addMethodToController(controllerName: string, methodName: string, config: RegisterDecoratorConfig, callback: () => void): void {
		this._hashMap[controllerName] = merge(this._hashMap[controllerName], {
			methods: {
				[methodName]: {
					config,
					callback
				}
			}
		})
	}

	public registerAllMethods(controllerName: string, controllerInstance: () => void, server: () => void, options: {}, next: () => void): void {
		const methods = get(this._hashMap, [controllerName, 'methods'], {});
		Object.values(methods).forEach((method: ControllerHashMapRegisty) => {
			const { type, path = '/', schema } = method.config;
			server[type.toLocaleLowerCase()](path, {
				...schema ? { schema } : {}
			}, (...args) => {
				const [_request, _response, _next] = args;
				const _logger = ScopedLogger(controllerName);
				const methodName = method.callback.name;
				try {
					method.callback.apply(controllerInstance, args);
					_logger.debug(`Method '${methodName}' called successfully`);
				} catch (error) {
					_logger.error(`Error calling method ${methodName} `, error);
					_response.status(500).send('Internal Server Error');
					// TODO: Error Handler for all errors
				}
			})
		});
		next();
	}

	public getApiPathByControllerName(controllerName: string): string | null {
		return get(this._hashMap, [controllerName, 'path']);
	}

}