import { RootController } from '@api/core/controllers';
import { controllers } from '@api/controllers';
import { apiConfig } from '@api/core/config';
import { Logger } from '@api/core/logger';

export const routes = (server) => {
	try {
		(controllers || []).forEach(controller => {
			const rootController = RootController.getInstance();
			const controllerInstance = new controller();
			const controllerName = controllerInstance.constructor.name;
			const controllerPath = rootController.getApiPathByControllerName(controllerName);
			if (typeof controllerPath === 'string' && controllerPath !== '') {
				const controllerFullPath = `${apiConfig.PREFIX}/${controllerPath}`;
				server.register(
					(server, options, next) => {
						rootController.registerAllMethods(controllerName, controllerInstance, server, options, next);
						Logger.success(`${controllerFullPath}\n`);
					},
					{ prefix: controllerFullPath }
				);
			}
		});
	} catch (error) {
		console.error(error);
	}
}