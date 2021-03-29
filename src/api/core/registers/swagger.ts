import { apiConfig } from '@api/core/config';

export const swagger = (server) => {
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
}