import { z } from 'zod'
import { FastifyTypedInstance } from './types'
import { randomUUID } from 'node:crypto'

type User = {
    id: string
    name: string
    email: string
}

const users: User[] = []

export async function routes(fastify: FastifyTypedInstance) {
    fastify.get('/users', {
        schema: {
            tags: ['users'],
            description: 'List all users',
            response: {
                200: z.array(z.object({
                    id: z.string(),
                    name: z.string(),
                    email: z.string().email()
                }))
            }
        }
    }, async () => {
        return users
    })

    fastify.post('/users', {
        schema:{
            tags: ['users'],
            description: 'Create a new user',
            body: z.object({
                name: z.string(),
                email: z.string().email()
            }),
            response: {
                201: z.null().describe('Created successfully!')
            }
        }
    }, async (request, reply) => {

        const { name, email } = request.body

        users.push({
            id: randomUUID(),
            name,
            email
        })

        return reply.status(201).send()
    })
}