import { apiConfig } from "@api/config";

const mongoose = require('mongoose');

const USER = apiConfig.MONGO_USER;
const PASSWORD = apiConfig.MONGO_PASSWORD;
const HOST = apiConfig.MONGO_HOST;
const DATABASE = apiConfig.MONGO_DATABASE;

const stringConnection = HOST === 'localhost' ? `mongodb://${HOST}:27017/${DATABASE}` : `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DATABASE}`;

mongoose.connect(stringConnection, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	if (!err)
		console.log('MongoDB connection successful.');
	else
		console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;