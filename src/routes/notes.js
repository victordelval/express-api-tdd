import express from 'express'

import mocks from '../mocks'

const router = express.Router()

router
    .get('/', (req, res, next) => {
        // TODO - Query DB manager to read all notes from DB
        const query = mocks
        res.status(200)
            .json(query)
    })
    .post('/', (req, res, next) => {
        // Check title is unique
        const filtered = mocks.filter(item =>
            item.title.toLowerCase() === req.body.title.toLowerCase()
        )
        if (filtered.length) {
            const errorData = { error: 400, message: 'There is already a note with that title' }
            res.status(400)
                .json(errorData)
        } else {
            // TODO - Query DB manager to create a new note into DB
            const query = req.body
            res.status(201)
                .json(query)
        }
    })
    .get('/:title', (req, res, next) => {
        // TODO - Query DB manager to read filtered data from DB
        const query = mocks.filter(item =>
            item.title.toLowerCase() === req.params.title.toLowerCase()
        )
        res.status(200)
            .json(query)
    })

export default router
