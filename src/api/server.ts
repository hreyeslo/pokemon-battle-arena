import fastify from 'fastify';

import productsHandler from '@api/modules/products/routes';
import healthHandler from '@api/modules/health/routes';
import { apiConfig } from '@api/config';

require('./plugins/db');

export const createApiServer = () => {
	const server = fastify();
	server.register(require('fastify-cors'));

	server.register(require('fastify-oas'), {
		routePrefix: '/docs',
		exposeRoute: true,
		swagger: {
			info: {
				title: 'product api',
				description: 'api documentation',
				version: '0.1.0'
			},
			servers: [
				{ url: `http://localhost:${apiConfig.PORT}`, description: 'development' },
				{
					url: 'https://<production-url>',
					description: 'production'
				}
			],
			schemes: ['http'],
			consumes: ['application/json'],
			produces: ['application/json'],
		}
	});

	server.register(healthHandler, { prefix: '/health' });
	server.register(productsHandler, { prefix: '/product' });

	server.setErrorHandler((error, req, res) => {
		req.log.error(error.toString());
		res.send({ error });
	});

	return server;
}
