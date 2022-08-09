import { Router } from 'express'

import authController from '@controllers/auth.controller'

const authRouter = Router()

authRouter.post('/login', authController.login)
authRouter.post('/registration', authController.registartion)
authRouter.get('/logout', authController.logout)
authRouter.get('/refresh', authController.refresh)

export default authRouter
