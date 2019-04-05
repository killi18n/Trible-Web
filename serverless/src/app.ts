import * as Koa from 'koa'
import * as Router from 'koa-router'
// import * as serve from 'koa-static'
import * as bodyParser from 'koa-bodyparser'
import * as cors from '@koa/cors'
// import * as path from 'path'
import ssr from '../ssr/render'

const app = new Koa()
const router = new Router()

// const buildDir = path.join(__dirname, '../build')

router.get('/', ssr)

app.use(cors())
app.use(bodyParser({ encoding: 'utf-8' }))
app.use(router.routes()).use(router.allowedMethods())
// app.use(serve(buildDir))
app.use(ssr)

export default app
