import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(memoriesRoutes)

// definindo uma porta para a aplicação
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server is running ✔')
  })
