import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()
// definindo rotas
// fazendo conexão com o prisma
app.get('/users', async () => {
  const users = await prisma.users.findMany()
  return users
})

// definindo uma porta para a aplicação
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server is running ✔')
  })
