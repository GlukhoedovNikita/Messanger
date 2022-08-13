import { ChangeEvent, FC, useEffect } from 'react'

import useTypedSelector from '@hooks/useTypedSelector'
import useTypedDispatch from '@hooks/userTypedDispatch'

import { authLogout } from '@store/slices/auth/auth.actions'
import { profileChangeDisable, profileChangeUser } from '@store/slices/profile/profile.slice'
import authSelector from '@store/slices/auth/auth.selector'
import profileSelector from '@store/slices/profile/profile.selector'

import AvatarEmpty from '@components/ui/AvatarEmpty/AvatarEmpty'
import Text from '@components/ui/Text/Text'
import Input from '@components/ui/Input/Input'
import Button from '@components/ui/Button/Button'

import styles from './ProfileContainer.module.scss'
import useRedirect from '@hooks/useRedirect'

const ProfileContainer: FC = () => {
    const dispatch = useTypedDispatch()
    const { user } = useTypedSelector(authSelector)
    const { disable, userUpdateTemplate } = useTypedSelector(profileSelector)

    useEffect(() => {
        dispatch(profileChangeUser({
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            login: user.login,
            phone: user.phone,
        }))
    }, [user])

    const redirectPasswordHandler = useRedirect('/profile/password')
    const logoutHandler = () => dispatch(authLogout())
    const disableHandler = () => dispatch(profileChangeDisable(false))

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(profileChangeUser({ ...userUpdateTemplate, email: e.target.value }))
    }
    const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(profileChangeUser({ ...userUpdateTemplate, name: e.target.value }))
    }
    const lastnameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(profileChangeUser({ ...userUpdateTemplate, lastname: e.target.value }))
    }
    const loginHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(profileChangeUser({ ...userUpdateTemplate, login: e.target.value }))
    }
    const phoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(profileChangeUser({ ...userUpdateTemplate, phone: e.target.value }))
    }

    return (
        <div className={styles.container}>
            <div className={styles.blockImage}>
                <AvatarEmpty size="big" color="dark" image />
                <Text text="Name" size="h2" />
            </div>
            <div className={styles.blockInput}>
                <div className={styles.blockText}>
                    <Text text="Email" size="h3" color="grey" />
                    <Input
                        type="email"
                        value={userUpdateTemplate.email}
                        onChange={emailHandler}
                        color="transparent"
                        disabled={disable}
                    />
                </div>
                <div className={styles.blockText}>
                    <Text text="Login" size="h3" color="grey" />
                    <Input
                        type="text"
                        value={userUpdateTemplate.login}
                        onChange={loginHandler}
                        color="transparent"
                        disabled={disable}
                    />
                </div>
                <div className={styles.blockText}>
                    <Text text="Name" size="h3" color="grey" />
                    <Input
                        type="text"
                        value={userUpdateTemplate.name}
                        onChange={nameHandler}
                        color="transparent"
                        disabled={disable}
                    />
                </div>
                <div className={styles.blockText}>
                    <Text text="Last name" size="h3" color="grey" />
                    <Input
                        type="text"
                        value={userUpdateTemplate.lastname}
                        onChange={lastnameHandler}
                        color="transparent"
                        disabled={disable}
                    />
                </div>
                <div className={styles.blockText}>
                    <Text text="Phone" size="h3" color="grey" />
                    <Input
                        type="tel"
                        value={userUpdateTemplate.phone}
                        onChange={phoneHandler}
                        color="transparent"
                        disabled={disable}
                    />
                </div>
            </div>
            <div className={styles.blockButton}>
                <Button
                    onClick={disableHandler}
                    text="Change data"
                    size="small"
                    color="transparent"
                />
                <Button
                    onClick={redirectPasswordHandler}
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
