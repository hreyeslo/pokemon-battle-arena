import { Controller, Method } from '@api/core/decorators';
import { Signale } from 'signale';

import { getHealthSchema } from './schema';

@Controller()
export class HealthController {

	private _logger: Signale;

	@Method({
		type: 'GET',
		schema: getHealthSchema
	})
	getStatus(req, res) {
		res.send({ status: 'ok' });
	}
}
