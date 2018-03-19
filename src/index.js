import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.end('Hello world!!! :-P')
})

app.listen('9000', () => {
    console.log('Server listening at http://localhost:9000')
})