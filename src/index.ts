import { apiConfig } from "@api/config";
import createServer from './server';

const server = createServer();

console.log(apiConfig)

server.listen(+apiConfig.PORT, '0.0.0.0', (err, address) => {
	if (err) throw err;
	console.log(`server listening on ${address}`);
});

module.exports = server;
