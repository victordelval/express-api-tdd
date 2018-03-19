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

        it('it should GET all', () => {
            const expected = 'Hello "configured" world!!!'
            request(instance)
                .get('/')
                .expect(200, expected)
                .end((err, res) => {
                    if (err) throw err
                })
        })
    })
})