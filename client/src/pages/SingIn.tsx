import { FC } from 'react'

import AuthLayout from '@components/layouts/AuthLayout/AuthLayout'
import SingInContainer from '@components/containers/SingIn/SingInContainer/SingInContainer'

const SingInPage: FC = () => {
    return (
        <AuthLayout>
            <SingInContainer />
        </AuthLayout>
    )
}

export default SingInPage
