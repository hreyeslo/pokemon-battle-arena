const mongoose = require('mongoose');

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const host = process.env.MONGO_HOST;
const database = process.env.MONGO_DATABASE;

const stringConnection = host === 'localhost' ? `mongodb://${host}:27017/${database}` : `mongodb+srv://${user}:${password}@${host}/${database}`;

mongoose.connect(stringConnection, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	if (!err)
		console.log('MongoDB connection successful.');
	else
		console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;