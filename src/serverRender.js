import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './components/App'
import { Helmet } from 'react-helmet'
import pretty from 'pretty'

const serverRender = async ctx => {
    const { url } = ctx

    let context = {}

    const html = ReactDOMServer.renderToString(
        <StaticRouter location={url} context={context}>
            <App />
        </StaticRouter>
    )

    if (context.isNotFound) {
        ctx.status = 404
    }

    const helmet = Helmet.renderStatic()

    return {
        html: pretty(html),
        helmet,
    }
}

export default serverRender
