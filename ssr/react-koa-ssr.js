import serverless from 'serverless-http'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/components/App'
import fs from 'fs'
import path from 'path'

const functionName = 'react-koa-ssr'
const app = new Koa()

app.use(bodyParser())
// app.use(bodyParser.
