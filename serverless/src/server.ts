import serverless from 'serverless-http'
import app from './app'

const server = serverless(app)

export const handler = async (event, context) => {
    return await server(event, context)
}
