const path = require('path');

export const staticContent = (server) => {
	if (process.env.ENVIRONMENT === 'production') {
		server.register(require('fastify-static'), {
			root: path.join(__dirname, 'src/app')
		})
	}
}