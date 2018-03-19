import request from 'supertest'

import server from '../src'

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
    describe.skip('/GET /fake-404', () => {
        it('it should GET 404', () => {
            const expected = {
                "error": 404,
                "message": "[404] There is no resource for the route consulted!"
            }
            request(instance)
                .get('/fake-404')
                .expect('Content-Type', /json/)
                .expect(200, expected)
                .end((err, res) => {
                    if (err) throw err
                })
        })
    })
})