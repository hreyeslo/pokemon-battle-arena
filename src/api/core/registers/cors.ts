export const cors = (server) => {
	server.register(require('fastify-cors'), {
		origin: "https://pokemon-battle-arena.herokuapp.com"
	});
}