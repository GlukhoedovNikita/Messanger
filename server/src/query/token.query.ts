import { pool } from 'index'

class TokenQuery {
    async existRefreshToken(userId: number) {
        try {
            const refreshTokenDB = await pool.query('SELECT refreshtoken FROM tokens WHERE userid = $1', [userId])
            return !!refreshTokenDB.rows[0]
        } catch (e) {
            throw e
        }
    }

    async create(userId: number, refreshToken: string) {
        try {
            await pool.query('INSERT INTO tokens(userid, refreshToken) values ($1, $2)', [
                userId, refreshToken
            ])
        } catch (e) {
            throw e
        }
    }

    async update(refreshToken: string) {
        try {
            await pool.query('UPDATE tokens SET refreshtoken = $1', [refreshToken])
        } catch (e) {
            throw e
        }
    }

    async delete(refreshToken: string) {
        try {
            await pool.query('DELETE FROM tokens WHERE refreshtoken = $1', [refreshToken])
        } catch (e) {
            throw e
        }
    }
}

export default new TokenQuery()
