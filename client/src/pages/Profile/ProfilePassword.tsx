import { FC } from 'react'

import ProfileLayout from '@components/layouts/ProfileLayout/ProfileLayout'
import ProfilePasswordContainer from '@components/containers/Proflie/ProfilePasswordContainer/ProfilePasswordContainer'

const ProfilePasswordPage: FC = () => {
    return (
        <ProfileLayout>
            <ProfilePasswordContainer />
        </ProfileLayout>
    )
}

export default ProfilePasswordPage
