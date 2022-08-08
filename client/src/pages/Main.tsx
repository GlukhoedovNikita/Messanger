import { FC } from 'react'

import MainLayout from '@components/layouts/MainLayout/MainLayout'
import MainList from '@components/containers/Main/MainList/MainList'

const MainPage: FC = () => {
    return (
        <MainLayout>
            <MainList />
        </MainLayout>
    )
}

export default MainPage
