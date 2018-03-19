import base from './routes/base'
import notes from './routes/notes'

export default app => {
    app.use('/', base)
    app.use('/notes', notes)
}