import { createServer } from '@api/core/server';

module.exports = createServer((err, address) => {
	if (err) throw err;
	console.log(`server listening on ${address}`);
});