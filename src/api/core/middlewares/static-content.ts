const path = require('path');

export const staticContent = (server) => {
	const env = process.env.ENVIRONMENT;
	if (env === 'staging' || env === 'production') {
		server.register(require('fastify-static'), {
			root: path.resolve(__dirname, '../../../app')
		})
	}
}