import axios from 'axios'

import {
    IAuthResponse,
    IUser,
    IUserLogin,
    IUserRegistration
} from '@store/slices/auth/auth.interfaces'
import { SERVER_URL } from '@constants/index'
import { IUserUpdate } from '@store/slices/profile/profile.interfaces'

const api = axios.create({
    baseURL: `${SERVER_URL}/auth`,
    withCredentials: true
})

class AuthService {
    async login(user: IUserLogin) {
        try {
            const response = await api.post<IAuthResponse>('/login', user)
            localStorage.setItem('accessToken', response.data.accessToken)
            return response.data.user
        } catch (e) {
            throw e
        }
    }

    async registration(user: IUserRegistration) {
        try {
            const response = await api.post<IAuthResponse>('/registration', user)
            localStorage.setItem('accessToken', response.data.accessToken)
            return response.data.user
        } catch (e) {
            throw e
        }
    }

    async refresh() {
        try {
            const response = await api.get<IAuthResponse>('/refresh')
            localStorage.setItem('accessToken', response.data.accessToken)
            return response.data.user
        } catch (e) {
            throw e
        }
    }

    async logout() {
        try {
            await api.get('/logout')
            localStorage.removeItem('accessToken')
        } catch (e) {
            throw e
        }
    }

    async updateUser(user: IUserUpdate) {
        try {
            const response = await api.post<IUser>('/update', user)
            return response.data
        } catch (e) {
            throw e
        }
    }
}

export default new AuthService()
