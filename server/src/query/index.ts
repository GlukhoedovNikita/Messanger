import { Pool } from 'pg'

const initialTables = (pool: Pool) => {
    pool.query('CREATE TABLE IF NOT EXISTS auth (\n\
        id SERIAL PRIMARY KEY,\n\
        email VARCHAR(255),\n\
        login VARCHAR(255),\n\
        password VARCHAR(255),\n\
        name VARCHAR(255),\n\
        lastname VARCHAR(255),\n\
        phone VARCHAR(255)\n\
    )')
    pool.query('CREATE TABLE IF NOT EXISTS tokens (\n\
        id SERIAL PRIMARY KEY,\n\
        refreshToken VARCHAR(255),\n\
        userId INTEGER,\n\
        FOREIGN KEY(userId) REFERENCES auth(id)\n\
    )')
}

export default initialTables
