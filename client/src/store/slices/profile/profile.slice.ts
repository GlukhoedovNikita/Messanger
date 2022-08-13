import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProfileState, IUserUpdate } from './profile.interfaces'

const initialState: IProfileState = {
    disable: true,
    userUpdateTemplate: {} as IUserUpdate
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        profileChangeDisable: (state, action: PayloadAction<boolean>) => {
            state.disable = action.payload
        },
        profileChangeUser: (state, action: PayloadAction<IUserUpdate>) => {
            state.userUpdateTemplate = action.payload
        }
    }
})

export const { profileChangeDisable, profileChangeUser } = profileSlice.actions

export default profileSlice.reducer
