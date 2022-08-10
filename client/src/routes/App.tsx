import { FC, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import useTypedSelector from '@hooks/useTypedSelector'
import useTypedDispatch from '@hooks/userTypedDispatch'

import { authRefresh } from '@store/slices/auth/auth.actions'
import authSelector from '@store/slices/auth/auth.selector'

import SingInPage from '@pages/SingIn'
import SingUpPage from '@pages/SingUp'
import SingUpResultPage from '@pages/SingUpResult'
import MainPage from '@pages/Main'
import ProfilePage from '@pages/Profile'

const App: FC = () => {
    const dispatch = useTypedDispatch()
    const { isAuth } = useTypedSelector(authSelector)

    useEffect(() => {
        dispatch(authRefresh())
    }, [])

    return (
        <Routes>
            {
                isAuth
                    ?
                    <>
                        <Route path="profile" element={<ProfilePage />} />
                        <Route path="*" element={<MainPage />} />
                    </>
                    :
                    <>
                        <Route path="*" element={<SingInPage />} />
                        <Route path="singup" element={<SingUpPage />} />
                        <Route path="singup/result" element={<SingUpResultPage />} />
                    </>
            }
        </Routes>
    )
}

export default App
