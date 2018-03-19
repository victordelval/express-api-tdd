import express from 'express'

import mocks from '../mocks'

const router = express.Router()

router
    .get('/', (req, res, next) => {
        // TODO - Read all notes from DB
        res.status(200)
            .json(mocks)
    })
    .post('/', (req, res, next) => {
        // TODO - Create a new note and save into DB
        res.status(201)
            .json(req.body)
    })

export default router
