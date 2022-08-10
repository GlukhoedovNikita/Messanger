import { compareSync, hashSync } from 'bcrypt'

import tokenService from './token.service'
import authQuery from '@query/auth.query'

import { IJwtPayload, IUserRegistartion } from '@interfaces/auth.interfaces'
import createError from '@utils/createError'

class AuthService {
    async login(login: string, password: string) {
        try {
            createError(!login || !password, 'no user')
            const userDB = await authQuery.getWithLogin(login)
            createError(!userDB, 'user does not exist')

            const passwordConfirm = compareSync(password, userDB.password)
            createError(!passwordConfirm, 'invalid password')

            const tokens = tokenService.create(userDB.id, userDB.email, userDB.login)
            const existRefreshToken = await tokenService.existRefreshToken(userDB.id)
            if (existRefreshToken) {
                await tokenService.updateRefreshToken(tokens.refreshToken)
            } else {
                await tokenService.save(userDB.id, tokens.refreshToken)
            }
            return {
                user: userDB,
                ...tokens
            }
        } catch (e) {
            throw e
        }
    }

    async registration(user: IUserRegistartion) {
        try {
            createError(!user, 'no user')
            const userDB = await authQuery.getWithEmail(user.email)
            createError(!!userDB, 'user already registered')

            const hashPassword = hashSync(user.password, 7)
            const userCreated = await authQuery.create({ ...user, password: hashPassword })

            const tokens = tokenService.create(userCreated.id, userCreated.email, userCreated.login)
            await tokenService.save(userCreated.id, tokens.refreshToken)
            return {
                user: userCreated,
                ...tokens
            }
        } catch (e) {
            throw e
        }
    }

    async refresh(refreshToken: string) {
        try {
            createError(!refreshToken, 'no refreshToken')
            const jwtPayload = tokenService.validateRefreshToken(refreshToken)
            const userDB = await authQuery.getWithId((jwtPayload as IJwtPayload).id)
            createError(!jwtPayload || !userDB, 'invalid refresh token or user does not exist')

            const tokens = tokenService.create(userDB.id, userDB.email, userDB.login)
            await tokenService.updateRefreshToken(tokens.refreshToken)
            return {
                user: userDB,
                ...tokens
            }
        } catch (e) {
            throw e
        }
    }

    async logout(refreshToken: string) {
        try {
            createError(!refreshToken, 'no refreshToken')
            await tokenService.delete(refreshToken)
        } catch (e) {
            throw e
        }
    }
}

export default new AuthService()
