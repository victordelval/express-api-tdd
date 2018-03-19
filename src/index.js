import express from 'express'

import config from './config'

let _server

const server = {

    start() {
        const app = express()
        config(app)

        app.get('/', (req, res, next) => {
            res.end('Hello world!')
        })

        // Middleware to manage 404 error
        // app.use((req, res, next) => {
        //     res.json({
        //         error: 404,
        //         message: '[404] There is no resource for the route consulted!'
        //     })
        //     next()
        // })

        _server = app.listen('9000', () => {
            const address = _server.address()
            const host = address.address === '::'
                ? 'localhost'
                : address
            const port = app.locals.config.PORT

            if (process.env.NODE_ENV !== 'test') {
                console.log(`Server listening at http://${host}:${port}`)
            }
        })

        return _server
    },

    close() {
        _server.close()
    }
}

export default server

if (!module.parent) {
    server.start()
}