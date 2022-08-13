import { FC } from 'react'

import AuthLayout from '@components/layouts/AuthLayout/AuthLayout'
import SingUpContainer from '@components/containers/SingUp/SingUpContainer/SingUpContainer'

const SingUpPage: FC = () => {
    return (
        <AuthLayout>
            <SingUpContainer />
        </AuthLayout>
    )
}

export default SingUpPage
