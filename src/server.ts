import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { validatorCompiler, serializerCompiler, ZodTypeProvider, jsonSchemaTransform } from 'fastify-type-provider-zod'
import { fastifySwagger } from '@fastify/swagger'
import { routes } from './routes'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, { origin: '*' })

app.register(fastifySwagger, {
    openapi: {
        info: {
            title: 'Fastify API',
            version: '0.1.0',
        },
    },
    transform: jsonSchemaTransform
})

app.register(require('@scalar/fastify-api-reference'), {
    routePrefix: '/docs'
})

app.register(routes)

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
})
