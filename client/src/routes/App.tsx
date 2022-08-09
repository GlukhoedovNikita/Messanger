import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import SingInPage from '@pages/SingIn'
import SingUpPage from '@pages/SingUp'
import SingUpResultPage from '@pages/SingUpResult'
import MainPage from '@pages/Main'
import ProfilePage from '@pages/Profile'

const App: FC = () => {
    return (
        <Routes>
            <Route path="singin" element={<SingInPage />} />
            <Route path="singup" element={<SingUpPage />} />
            <Route path="singup/result" element={<SingUpResultPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="*" element={<MainPage />} />
        </Routes>
    )
}

export default App
