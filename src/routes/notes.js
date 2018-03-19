import express from 'express'

import mocks from '../mocks'

const router = express.Router()

router
    .get('/', (req, res, next) => {
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
            const query = req.body
            res.status(201)
                .json(query)
        }
    })
    .get('/:title', (req, res, next) => {
        let query = mocks.filter(item =>
            item.title.toLowerCase() === req.params.title.toLowerCase()
        )
        if (query.length) query = query[0]
        res.status(200)
            .json(query)
    })
    .put('/:title', (req, res, next) => {
        let filtered = mocks.filter(item =>
            item.title.toLowerCase() === req.params.title.toLowerCase()
        )
        if (filtered.length) {
            filtered = filtered[0]
            if (req.query.hasOwnProperty('favorite')) {
                filtered.favorite = Boolean(req.query.favorite)
                const query = filtered
                res.status(200)
                    .json(query)
            } else {
                const errorData = { error: 400, message: 'The favorite attribute is required.' }
                res.status(400)
                    .json(errorData)
            }
        } else {
            const errorData = { error: 400, message: 'A note with the title provided has not been found.' }
            res.status(400)
                .json(errorData)
        }
    })

export default router
