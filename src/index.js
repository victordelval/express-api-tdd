import express from 'express'

import config from './config'

let _server

const app = express()

config(app)

app.get('/', (req, res, next) => {
    res.end('Hello "configured" world!!!')
})

_server = app.listen('9000', () => {
    const address = _server.address()
    const host = address.address === '::'
        ? 'localhost'
        : address
    const port = app.locals.config.PORT

    console.log(`Server listening at http://${host}:${port}`)
})