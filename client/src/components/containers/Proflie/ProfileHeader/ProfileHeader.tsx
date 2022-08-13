import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import useTypedSelector from '@hooks/useTypedSelector'
import useTypedDispatch from '@hooks/userTypedDispatch'

import { profileChangeDisable } from '@store/slices/profile/profile.slice'
import { authUpdateUser } from '@store/slices/auth/auth.actions'
import profileSelector from '@store/slices/profile/profile.selector'

import Button from '@components/ui/Button/Button'
import Text from '@components/ui/Text/Text'

import styles from './ProfileHeader.module.scss'

const ProfileHeader: FC = () => {
    const navigate = useNavigate()
    const dispatch = useTypedDispatch()
    const { disable, userUpdateTemplate } = useTypedSelector(profileSelector)
    const redirectBackHandler = () => navigate(-1)

    const saveHandler = () => {
        dispatch(authUpdateUser(userUpdateTemplate))
        dispatch(profileChangeDisable(true))
    }

    return (
        <div className={styles.container}>
            <Button
                onClick={redirectBackHandler}
                text="Back"
                color="transparent"
                size="small"
            />
            <Text text="Profile" size="h3" />
            <Button
                onClick={saveHandler}
                text="Save"
                color="transparent"
                size="small"
                disabled={disable}
            />
        </div>
    )
}

export default ProfileHeader
