import { Application, json } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import createError from '@utils/createError'

const appConfig = (app: Application) => {
    try {
        const clientUrl = process.env.CLIENT_URL
        createError(!clientUrl, 'config')

        app.use(json())
        app.use(cookieParser())
        app.use(cors({
            credentials: true,
            origin: clientUrl,
            optionsSuccessStatus: 200,
        }))
    } catch (e) {
        throw e
    }
}

export default appConfig
