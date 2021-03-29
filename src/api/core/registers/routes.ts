import { RootController } from '@api/core/controller';
import { routes as _routes } from '@api/routes';
import { apiConfig } from '@api/core/config';

export const routes = (server) => {
	(_routes || []).forEach(route => {
		try {
			const rootController = RootController.getInstance();
			const controllerPath = `${apiConfig.PREFIX}/${route.path}`;
			const controllerName = route.controller.name;

			server.register(
				(server, options, next) => {
					new route.controller();
					rootController.registerAllMethods(controllerName, server, options, next);
					console.log('Registered route:', controllerPath)
				},
				{
					prefix: `${apiConfig.PREFIX}/${route.path}`
				}
			);
		} catch (error) {
			console.error(error);
		}
	});
}