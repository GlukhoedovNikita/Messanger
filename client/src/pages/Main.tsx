import { FC } from 'react'

import MainLayout from '@components/layouts/MainLayout/MainLayout'
import MainContainer from '@components/containers/Main/MainContainer/MainContainer'

const MainPage: FC = () => {
    return (
        <MainLayout>
            <MainContainer />
        </MainLayout>
    )
}

export default MainPage
