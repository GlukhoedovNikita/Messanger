import { FC, useEffect } from 'react'

import useTypedDispatch from '@hooks/userTypedDispatch'

import { profileChangeDisable } from '@store/slices/profile/profile.slice'

import ProfileLayout from '@components/layouts/ProfileLayout/ProfileLayout'
import ProfileContainer from '@components/containers/Proflie/ProfileContainer/ProfileContainer'

const ProfilePage: FC = () => {
    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(profileChangeDisable(true))
    }, [])

    return (
        <ProfileLayout>
            <ProfileContainer />
        </ProfileLayout>
    )
}

export default ProfilePage
