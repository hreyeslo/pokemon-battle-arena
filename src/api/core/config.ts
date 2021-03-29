import { trimStart } from 'lodash';

export const apiConfig = {
	//API
	PORT: process.env.API_PORT || process.env.PORT,
	PREFIX: '/' + trimStart(process.env.API_PREFIX || 'api', '/'),
	// MONGO
	MONGO_USER: process.env.MONGO_USER,
	MONGO_PASSWORD: process.env.MONGO_PASSWORD,
	MONGO_HOST: process.env.MONGO_HOST,
	MONGO_DATABASE: process.env.MONGO_DATABASE
}