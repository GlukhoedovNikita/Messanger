import { FC } from 'react'

import AvatarEmpty from '@components/ui/AvatarEmpty/AvatarEmpty'
import Text from '@components/ui/Text/Text'
import Input from '@components/ui/Input/Input'
import Button from '@components/ui/Button/Button'

import styles from './ProfileContainer.module.scss'

const ProfileContainer: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.blockImage}>
                <AvatarEmpty size="big" color="dark" image />
                <Text text="Name" size="h2" />
            </div>
            <div className={styles.blockInput}>
                <div className={styles.blockText}>
                    <Text text="Email" size="h3" color="grey" />
                    <Input type="email" placeholder="email" color="transparent" />
                </div>
                <div className={styles.blockText}>
                    <Text text="Login" size="h3" color="grey" />
                    <Input type="text" placeholder="login" color="transparent" disabled />
                </div>
                <div className={styles.blockText}>
                    <Text text="Name" size="h3" color="grey" />
                    <Input type="text" placeholder="name" color="transparent" disabled />
                </div>
                <div className={styles.blockText}>
                    <Text text="Last name" size="h3" color="grey" />
                    <Input type="text" placeholder="last name" color="transparent" disabled />
                </div>
                <div className={styles.blockText}>
                    <Text text="Phone" size="h3" color="grey" />
                    <Input type="tel" placeholder="phone" color="transparent" disabled />
                </div>
            </div>
            <div className={styles.blockButton}>
                <Button text="Change data" size="small" color="transparent" />
                <Button text="Change password" size="small" color="transparent" />
                <Button text="Log out" size="small" color="red" />
            </div>
        </div>
    )
}

export default ProfileContainer
