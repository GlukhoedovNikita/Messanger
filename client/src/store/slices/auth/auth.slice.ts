import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
    authLogin,
    authLogout,
    authRefresh,
    authRegistration,
    authUpdateUser
} from './auth.actions'

import { IAuthState, IUser, IUserTemplateRegistration } from './auth.interfaces'

const initialState: IAuthState = {
    loading: false,
    error: null,
    isAuth: !!window.localStorage.getItem('accessToken'),
    user: {} as IUser,
    userTemplateRegistration: {} as IUserTemplateRegistration
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateUserTemplateRegistration(state, action: PayloadAction<IUserTemplateRegistration>) {
            state.userTemplateRegistration = action.payload
        }
    },
    extraReducers: {
        [authLogin.pending.type]: (state) => {
            state.loading = true
            state.error = null
            state.userTemplateRegistration = {} as IUserTemplateRegistration
        },
        [authLogin.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.loading = false
            state.error = null
            state.isAuth = true
            state.user = action.payload
        },
        [authLogin.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },

        [authRegistration.pending.type]: (state) => {
            state.loading = true
            state.error = null
            state.userTemplateRegistration = {} as IUserTemplateRegistration
        },
        [authRegistration.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.loading = false
            state.error = null
            state.isAuth = true
            state.user = action.payload
        },
        [authRegistration.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },

        [authRefresh.pending.type]: (state) => {
            state.loading = true
            state.error = null
            state.userTemplateRegistration = {} as IUserTemplateRegistration
        },
        [authRefresh.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.loading = false
            state.error = null
            state.isAuth = true
            state.user = action.payload
        },
        [authRefresh.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
            state.isAuth = false
            state.user = {} as IUser
        },

        [authLogout.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [authLogout.fulfilled.type]: (state) => {
            state.loading = false
            state.error = null
            state.isAuth = false
            state.user = {} as IUser
        },
        [authLogout.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },

        [authUpdateUser.pending.type]: (state) => {
            state.error = null
        },
        [authUpdateUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.error = null
            state.user = action.payload
        },
        [authUpdateUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    }
})

export const { updateUserTemplateRegistration } = authSlice.actions

export default authSlice.reducer
