import fastify from 'fastify';

import { cors, swagger, routes, errorHandler, staticContent } from '@api/core/registers';
import { apiConfig } from '@api/core/config';

require('../plugins/db');

export const createServer = (callback: (err: any, address: string) => void) => {

	const server = fastify();

	cors(server);

	swagger(server);

	errorHandler(server);

	routes(server);

	staticContent(server);

	if (typeof callback === 'function') {
		server.listen(+apiConfig.PORT, '0.0.0.0', callback);
	}

	return server;
}