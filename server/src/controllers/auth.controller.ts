import { Request, Response } from 'express'

import authService from '@services/auth.service'

class AuthController {
    async login(req: Request, res: Response) {
        try {
            const { login, password } = req.body
            const user = await authService.login(login, password)
            res.cookie('refreshToken', user.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
            })
            res.json(user)
        } catch (e) {
            res.status(401).json(`Login Error - ${e}`)
        }
    }

    async registartion(req: Request, res: Response) {
        try {
            const user = await authService.registration(req.body)
            res.cookie('refreshToken', user.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
            })
            res.json(user)
        } catch (e) {
            res.status(401).json(`Registration Error - ${e}`)
        }
    }

    async refresh(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            const tokens = await authService.refresh(refreshToken)
            res.cookie('refreshToken', tokens.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
            })
            res.json(tokens)
        } catch (e) {
            res.status(401).json(`Refresh Error - ${e}`)
        }
    }

    async logout(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            await authService.logout(refreshToken)
            res.clearCookie('refreshToken')
            res.json('success')
        } catch (e) {
            res.status(401).json(`Logout Error - ${e}`)
        }
    }
}

export default new AuthController()
