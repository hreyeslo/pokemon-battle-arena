import { createServer } from '@api/core/server';
import { Logger } from '@api/core/logger';

module.exports = createServer((error, address) => {
	if (error) {
		Logger.error(error);
		throw error;
	}
	Logger.success('Server started successfully\n');
	Logger.listening(`${address}\n`);
});