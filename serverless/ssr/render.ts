import axios from 'axios'

const render = require('./index').default
// const manifest = require('../build/asset-manifest.json')

type buildHtmlType = {
    html?: any
    helmet?: any
}

async function buildHtml({ html, helmet }: buildHtmlType) {
    const { manifest } = await getManifest()

    const { title } = helmet
    const jsKeys = Object.keys(manifest)
        .filter(jsKey => jsKey.match(/.js$/))
        .map(key => {
            if (key === 'service-worker.js') return null
            return `<script src="https://s3.ap-northeast-2.amazonaws.com/trible-client-ssr-build/build${
                manifest[key]
            }"></script>`
        })
        .join('\n\t\t')

    const cssKeys = Object.keys(manifest)
        .filter(cssKey => cssKey.match(/.css$/))
        .map(key => {
            return `<link href="https://s3.ap-northeast-2.amazonaws.com/trible-client-ssr-build/build${
                manifest[key]
            }" rel="stylesheet">`
        })
        .join('\n\t\t')

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="https://s3.ap-northeast-2.amazonaws.com/trible-client-ssr-build/build/HeaderIcon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="https://s3.ap-northeast-2.amazonaws.com/trible-client-ssr-build/build/manifest.json" />
        ${title.toString()}
        ${cssKeys}
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
            ${html}
        </div>
       ${jsKeys}
    </body>
    </html>
    `
}

const getManifest = async () => {
    try {
        const manifest = await axios.get(
            'https://s3.ap-northeast-2.amazonaws.com/trible-client-ssr-build/build/asset-manifest.json'
        )

        return { manifest: manifest.data }
    } catch (e) {
        console.log(e)
    }
}

// const getSsrJs = async () => {
//     try {
//         const ssrJs = await axios.get(
//             'https://s3.ap-northeast-2.amazonaws.com/trible-client-ssr-build/index.js'
//         )

//         return { ssrJs: ssrJs.data }
//     } catch (e) {
//         console.log(e)
//     }
// }

const renderFunction = async ctx => {
    try {
        const rendered = await render(ctx)
        ctx.body = await buildHtml(rendered)
    } catch (e) {
        console.log(e)
        ctx.body = await buildHtml({})
    }
}

export default renderFunction
