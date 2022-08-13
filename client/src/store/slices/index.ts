import authReducer from './auth/auth.slice'
import profileReducer from './profile/profile.slice'

const rootReducer = {
    auth: authReducer,
    profile: profileReducer,
}

export default rootReducer
