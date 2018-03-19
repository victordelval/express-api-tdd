import request from 'supertest'

import server from '../src'
import mocks from '../src/mocks'

describe('API', () => {

    let instance

    beforeEach(() => {
        instance = server.start()
    })

    afterEach(() => {
        server.close()
        instance = null
    })

    describe('/GET /', () => {
        it('it should GET a greet', () => {
            const expected = 'Hello world!'
            request(instance)
                .get('/')
                .expect(200, expected)
                .end((err, res) => {
                    if (err) throw err
                })
        })
    })

    // DISABLED - TDD purpose
    // describe.skip('/GET /fake-404', () => {
    //     it('it should GET 404', () => {
    //         const expected = {
    //             "error": 404,
    //             "message": "[404] There is no resource for the route consulted!"
    //         }
    //         request(instance)
    //             .get('/fake-404')
    //             .expect('Content-Type', /json/)
    //             .expect(200, expected)
    //             .end((err, res) => {
    //                 if (err) throw err
    //             })
    //     })
    // })

    describe('/GET /notes', () => {
        it('it should GET all notes', () => {
            request(instance)
                .get('/notes')
                .expect('Content-Type', /json/)
                .expect(200, mocks)
                .end((err, res) => {
                    if (err) throw err
                })
        })
    })

    describe('/POST /notes', () => {
        it('it should POST a new note', () => {
            const body = {
                title: 'Remember todo 3',
                body: 'Ac lobortis velit posuere eget. Nulla facilisis purus nibh.',
                favorite: false
            }

            request(instance)
                .post('/notes')
                .send(body)
                .expect(201, body)
                .end((err, res) => {
                    if (err) throw err
                })
        })
    })

    describe('/POST /notes', () => {
        it('it should raise exception when POST a duplicated new note', () => {
            const body = {
                title: 'Lorem ipsum',
                body: 'Ac lobortis velit posuere eget. Nulla facilisis purus nibh.',
                favorite: false
            }
            const errorRes = {
                error: 400,
                message: "There is already a note with that title"
            }

            request(instance)
                .post('/notes')
                .send(body)
                .expect(400, errorRes)
                .end((err, res) => {
                    if (err) throw err
                })
        })
    })

    describe('/GET /notes/:title', () => {
        let expected = mocks.filter(item =>
            item.title.toLowerCase() === 'Lorem ipsum'.toLowerCase()
        )
        if (expected.length) expected = expected[0]

        it('it should GET a note filtered by title', () => {
            request(instance)
                .get('/notes/Lorem ipsum')
                .expect('Content-Type', /json/)
                .expect(200, expected)
                .end((err, res) => {
                    if (err) throw err
                })
        })
    })

    describe('/PUT /notes/:title/favorite', () => {
        let expected = mocks.filter(item =>
            item.title.toLowerCase() === 'Lorem ipsum'.toLowerCase()
        )
        if (expected.length) expected = expected[0]

        it('it should PUT note filtered by title', () => {
            request(instance)
                .put('/notes/Lorem ipsum/favorite')
                .expect('Content-Type', /json/)
                .expect(200, expected)
                .end((err, res) => {
                    if (err) throw err
                })
        })
    })
})