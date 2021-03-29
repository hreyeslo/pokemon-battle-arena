import fastify from 'fastify';

import { cors, swagger, routes, errorHandler, staticContent } from '@api/core/middlewares';
import { apiConfig } from '@api/core/config';
import { Logger } from '@api/core/logger';

require('../plugins/db');

export const createServer = (callback: (err: any, address: string) => void) => {

	Logger.start('Starting server\n');

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