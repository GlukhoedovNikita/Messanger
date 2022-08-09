import { Application } from 'express'

import authRouter from './auth.router'

const routes = (app: Application) => {
    app.use('/auth', authRouter)
}

export default routes
