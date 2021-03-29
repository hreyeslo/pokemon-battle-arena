import { Register } from '@api/core/decorators';

import { getHealthSchema } from './schema';

export class HealthController {

	constructor() { }

	@Register({
		method: 'GET',
		schema: getHealthSchema
	})
	getStatus(req, res) {
		res.send({ status: 'ok' });
	}
}
