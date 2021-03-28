import { createApiServer } from '@api/server';
import { apiConfig } from "@api/config";

const server = createApiServer();

// TODO: add app

server.listen(+apiConfig.PORT, '0.0.0.0', (err, address) => {
	if (err) throw err;
	console.log(`server listening on ${address}`);
});

module.exports = server;
