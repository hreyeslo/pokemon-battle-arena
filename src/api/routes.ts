import { Routes } from "@api/core/models";

import { ProductController } from '@api/modules/products/controller';
import { HealthController } from "@api/modules/health/controller";

export const routes: Routes = [
	{
		controller: HealthController,
		path: 'health'
	},
	{
		controller: ProductController,
		path: 'product'
	}
];