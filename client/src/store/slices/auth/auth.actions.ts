/*  eslint-disable consistent-return */

import { createAsyncThunk } from '@reduxjs/toolkit'
import authService from '@services/auth.service'
import { AxiosError } from 'axios'
import { IUserLogin, IUserRegistration } from './auth.interfaces'

export const authLogin = createAsyncThunk(
    'login',
    async (user: IUserLogin, { rejectWithValue }) => {
        try {
            const userPayload = await authService.login(user)
            return userPayload
        } catch (e) {
            return rejectWithValue((e as AxiosError).response?.data)
        }
    }
)

export const authRegistration = createAsyncThunk(
    'registration',
    async (user: IUserRegistration, { rejectWithValue }) => {
        try {
            const userPayload = await authService.registration(user)
            return userPayload
        } catch (e) {
            return rejectWithValue((e as AxiosError).response?.data)
        }
    }
)

export const authRefresh = createAsyncThunk(
    'refresh',
    async (_, { rejectWithValue }) => {
        try {
            const userPayload = await authService.refresh()
            return userPayload
        } catch (e) {
            return rejectWithValue((e as AxiosError).response?.data)
        }
    }
)

export const authLogout = createAsyncThunk(
    'logout',
    async (_, { rejectWithValue }) => {
        try {
            await authService.logout()
        } catch (e) {
            return rejectWithValue((e as AxiosError).response?.data)
        }
    }
)
