const awsSdk = require('aws-sdk')
const dotenv = require('dotenv')
const path = require('path')
const fs = require('fs')

dotenv.config()

const { accessKeyId, secretAccessKey } = process.env

awsSdk.config.update({
    region: 'ap-northeast-2',
    credentials: {
        accessKeyId,
        secretAccessKey,
    },
})

const s3 = new awsSdk.S3()

const upload = async () => {
    const buildDirPath = path.join(__dirname, './build')
    // const staticBuildDirPath = path.join(__dirname, './build/static')
    const cssBuildDirPath = path.join(__dirname, './build/static/css')
    const jsBuildDirPath = path.join(__dirname, './build/static/js')
    const mediaBuildDirPath = path.join(__dirname, './build/static/media')

    try {
        const files = await fs.readdirSync(buildDirPath)
        files.forEach(async filename => {
            if (filename === 'static') return
            const targetfile = await fs.readFileSync(
                path.join(__dirname, `./build/${filename}`)
            )
            const params = {
                Bucket: 'trible-client-ssr-build',
                Key: `build/${filename}`,
                Body: targetfile,
                ContentType: 'text/plain',
            }
            const result = await s3.putObject(params).promise()
            console.log(result)
        })
        const cssfiles = await fs.readdirSync(cssBuildDirPath)
        cssfiles.forEach(async filename => {
            const targetfile = await fs.readFileSync(
                path.join(__dirname, `./build/static/css/${filename}`)
            )
            const params = {
                Bucket: 'trible-client-ssr-build',
                Key: `build/static/css/${filename}`,
                Body: targetfile,
                ContentType: 'text/css',
            }
            const result = await s3.putObject(params).promise()
            console.log(result)
        })

        const jsfiles = await fs.readdirSync(jsBuildDirPath)
        jsfiles.forEach(async filename => {
            const targetfile = await fs.readFileSync(
                path.join(__dirname, `./build/static/js/${filename}`)
            )
            const params = {
                Bucket: 'trible-client-ssr-build',
                Key: `build/static/js/${filename}`,
                Body: targetfile,
                ContentType: 'text/javascript',
            }
            const result = await s3.putObject(params).promise()
            console.log(result)
        })

        const mediafiles = await fs.readdirSync(mediaBuildDirPath)
        mediafiles.forEach(async filename => {
            const targetfile = await fs.readFileSync(
                path.join(__dirname, `./build/static/media/${filename}`)
            )
            const params = {
                Bucket: 'trible-client-ssr-build',
                Key: `build/static/media/${filename}`,
                Body: targetfile,
                ContentType: 'image/jpeg',
            }
            const result = await s3.putObject(params).promise()
            console.log(result)
        })
    } catch (e) {
        console.log(e)
    }
}

upload()
