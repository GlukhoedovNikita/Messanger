import { FC } from 'react'

import useTypedSelector from '@hooks/useTypedSelector'
import useTypedDispatch from '@hooks/userTypedDispatch'

import { authLogout } from '@store/slices/auth/auth.actions'
import authSelector from '@store/slices/auth/auth.selector'

import AvatarEmpty from '@components/ui/AvatarEmpty/AvatarEmpty'
import Text from '@components/ui/Text/Text'
import Input from '@components/ui/Input/Input'
import Button from '@components/ui/Button/Button'

import styles from './ProfileContainer.module.scss'

const ProfileContainer: FC = () => {
    const dispatch = useTypedDispatch()
    const { user } = useTypedSelector(authSelector)

    const logoutHandler = () => dispatch(authLogout())

    return (
        <div className={styles.container}>
            <div className={styles.blockImage}>
                <AvatarEmpty size="big" color="dark" image />
                <Text text="Name" size="h2" />
            </div>
            <div className={styles.blockInput}>
                <div className={styles.blockText}>
                    <Text text="Email" size="h3" color="grey" />
                    <Input type="email" placeholder={user.email} color="transparent" disabled />
                </div>
                <div className={styles.blockText}>
                    <Text text="Login" size="h3" color="grey" />
                    <Input type="text" placeholder={user.login} color="transparent" disabled />
                </div>
                <div className={styles.blockText}>
                    <Text text="Name" size="h3" color="grey" />
                    <Input type="text" placeholder={user.name} color="transparent" disabled />
                </div>
                <div className={styles.blockText}>
                    <Text text="Last name" size="h3" color="grey" />
                    <Input type="text" placeholder={user.lastname} color="transparent" disabled />
                </div>
                <div className={styles.blockText}>
                    <Text text="Phone" size="h3" color="grey" />
                    <Input type="tel" placeholder={user.phone} color="transparent" disabled />
                </div>
            </div>
            <div className={styles.blockButton}>
                <Button
                    text="Change data"
                    size="small"
                    color="transparent"
                />
                <Button
                    text="Change password"
                    size="small"
                    color="transparent"
                />
                <Button
                    onClick={logoutHandler}
                    text="Log out"
                    size="small"
                    color="red"
                />
            </div>
        </div>
    )
}

export default ProfileContainer
