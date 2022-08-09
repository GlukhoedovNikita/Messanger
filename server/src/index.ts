/* eslint-disable import/prefer-default-export */

import express, { Application } from 'express'
import { config } from 'dotenv'

import routes from '@routes/index'
import appConfig from '@utils/app.config'
import createDatabase from '@utils/createDatabase'
import pathResolve from '@utils/pathResolve'

config({
    path: pathResolve('.env')
})

const PORT = process.env.PORT || 5000

const app: Application = express()
export const pool = createDatabase()

appConfig(app)
routes(app)

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port - ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
