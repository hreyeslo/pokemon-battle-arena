import { RegisterDecoratorConfig } from '@api/core/models';
import { RootController } from '@api/core/controllers';
import { ScopedLogger } from '@api/core/logger';
import { kebabCase } from 'lodash';

export const Controller = (path?: string) => {
	return <T extends { new(...args: any[]): {} }>(constructor: T) => {
		const rootController = RootController.getInstance();
		const controllerName = constructor.name || '';
		if (!path) {
			path = kebabCase(controllerName).replace('-controller', '');
		}
		rootController.addPathToController(constructor.name, path);
		return class extends constructor {
			_logger = ScopedLogger(controllerName);
		}
	}
}

export const Method = (config?: RegisterDecoratorConfig) => {
	return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
		const rootController = RootController.getInstance();
		const controllerName = Object.getOwnPropertyDescriptors(target)['constructor'].value.name;
		rootController.addMethodToController(controllerName, propertyKey, config, descriptor.value);
		return descriptor;
	}
}