import { ControllerHashMap, ControllerHashMapRegisty, RegisterDecoratorConfig } from "@api/core/models";

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

	public addController(controllerName: string, methodName: string, config: RegisterDecoratorConfig, method: () => void) {
		this._hashMap[controllerName] = {
			...this._hashMap[controllerName],
			[methodName]: {
				config,
				method
			}
		}
	}

	public registerAllMethods(controllerName, server, options, next) {
		const controllers = this._hashMap[controllerName] || {};
		Object.values(controllers).forEach((controller: ControllerHashMapRegisty) => {
			const { method, path = '/', schema } = controller.config;
			server[method.toLocaleLowerCase()](path, {
				...schema ? { schema } : {}
			}, (...args) => controller.method.apply(null, args));
		});
		next();
	}

}