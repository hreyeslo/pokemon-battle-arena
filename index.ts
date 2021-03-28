import { createApiServer } from '@api/server';
import { apiConfig } from "@api/config";

const path = require('path');

const server = createApiServer();

if (process.env.ENVIRONMENT === 'production') {
	server.register(require('fastify-static'), {
		root: path.join(__dirname, 'src/app')
	})
}

server.listen(+apiConfig.PORT, '0.0.0.0', (err, address) => {
	if (err) throw err;
	console.log(`server listening on ${address}`);
});

module.exports = server;
