export const errorHandler = (server) => {
	server.setErrorHandler((error, req, res) => {
		req.log.error(error.toString());
		res.send({ error });
	});
}