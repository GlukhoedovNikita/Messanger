import jwt from 'jsonwebtoken'

import tokenQuery from '@query/token.query'
import createError from '@utils/createError'

class TokenService {
    create(id: number, email: string, login: string) {
        const secretAccess = process.env.SECRET_ACCESS || undefined
        const secretRefresh = process.env.SECRET_REFRESH || undefined

        createError(!secretAccess || !secretRefresh, 'env secret access, refresh')

        const accessToken = jwt.sign({ id, email, login }, secretAccess as string, { expiresIn: '1d' })
        const refreshToken = jwt.sign({ id, email, login }, secretRefresh as string, { expiresIn: '60d' })
        return {
            accessToken,
            refreshToken
        }
    }

    async save(userId: number, refreshToken: string) {
        try {
            await tokenQuery.create(userId, refreshToken)
        } catch (e) {
            throw e
        }
    }

    async updateRefreshToken(refreshToken: string) {
        try {
            await tokenQuery.update(refreshToken)
        } catch (e) {
            throw e
        }
    }

    async existRefreshToken(userId: number) {
        try {
            return tokenQuery.existRefreshToken(userId)
        } catch (e) {
            throw e
        }
    }

    async delete(refreshToken: string) {
        try {
            await tokenQuery.delete(refreshToken)
        } catch (e) {
            throw e
        }
    }

    validateRefreshToken(refreshToken: string) {
        try {
            const secretRefresh = process.env.SECRET_REFRESH
            createError(!secretRefresh, 'refresh token')
            return jwt.verify(refreshToken, secretRefresh as string)
        } catch (e) {
            throw e
        }
    }
}

export default new TokenService()
