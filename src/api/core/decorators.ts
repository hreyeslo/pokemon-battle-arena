import { RegisterDecoratorConfig } from '@api/core/models';
import { RootController } from '@api/core/controller';

export function Register(config?: RegisterDecoratorConfig) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		const rootController = RootController.getInstance();
		const controllerName = Object.getOwnPropertyDescriptors(target)['constructor'].value.name;
		rootController.addController(controllerName, propertyKey, config, descriptor.value.bind(target));
		return descriptor;
	}
}