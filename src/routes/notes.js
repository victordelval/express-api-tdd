import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
    let mocks = [
        {
            title: 'Note A',
            body: 'You must work',
            favorite: false
        },
        {
            title: 'Note B',
            body: 'You should rest',
            favorite: true
        },
        {
            title: 'Note C',
            body: 'You should take it easy',
            favorite: false
        }
    ]

    res
        .status(200)
        .json(mocks)
})

export default router
