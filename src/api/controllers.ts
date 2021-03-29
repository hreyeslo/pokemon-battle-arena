import { Controllers } from "@api/core/models";

import { ProductController } from '@api/modules/products/controller';
import { HealthController } from "@api/modules/health/controller";

export const controllers: Controllers = [
	HealthController,
	ProductController
];