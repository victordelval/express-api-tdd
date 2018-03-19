import express from 'express'

import mocks from '../mocks'

const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200)
        .json(mocks)
})

export default router
