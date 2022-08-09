import { Pool } from 'pg'

import initialTables from '@query/index'
import createError from './createError'

const createDatabase = () => {
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD
    const host = process.env.DB_HOST
    const port = process.env.DB_PORT
    const database = process.env.DATABASE

    createError(!user || !password || !host || !port || !database, 'connect db')

    const pool = new Pool({
        user,
        password,
        host,
        port: +(port as string),
        database,
    })

    initialTables(pool)

    return pool
}

export default createDatabase
