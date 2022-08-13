import { FC } from 'react'

import Input from '@components/ui/Input/Input'

import styles from './ProfilePasswordContainer.module.scss'
import Text from '@components/ui/Text/Text'

const ProfilePasswordContainer: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.blockInput}>
                <Text text="Current password" size="h3" color="grey" />
                <Input type="password" placeholder="·····" color="transparent" />
            </div>
            <div className={styles.blockInput}>
                <Text text="New password" size="h3" color="grey" />
                <Input type="password" placeholder="·····" color="transparent" />
            </div>
            <div className={styles.blockInput}>
                <Text text="Repeat new password" size="h3" color="grey" />
                <Input type="password" placeholder="·····" color="transparent" />
            </div>
        </div>
    )
}

export default ProfilePasswordContainer
