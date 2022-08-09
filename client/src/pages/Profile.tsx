import { FC } from 'react'

import ProfileLayout from '@components/layouts/ProfileLayout/ProfileLayout'
import ProfileContainer from '@components/containers/Proflie/ProfileContainer/ProfileContainer'

const ProfilePage: FC = () => {
    return (
        <ProfileLayout>
            <ProfileContainer />
        </ProfileLayout>
    )
}

export default ProfilePage
