const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
const bodyParser = require('koa-bodyparser')
const path = require('path')
const ssr = require('../ssr/render')

const app = new Koa()
const router = new Router()

const buildDir = path.join(__dirname, '../../build')

router.get('/', ssr)

app.use(bodyParser({ encoding: 'utf-8' }))
app.use(router.routes()).use(router.allowedMethods())
app.use(serve(buildDir))
app.use(ssr)

// app.use(ssr)

app.listen(4000, () => {
    console.log('app is running on port 4000')
})
