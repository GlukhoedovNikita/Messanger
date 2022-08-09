import { FC } from 'react'

import useRedirect from '@hooks/useRedirect'

import Button from '@components/ui/Button/Button'
import Text from '@components/ui/Text/Text'

import styles from './ProfileHeader.module.scss'

const ProfileHeader: FC = () => {
    const redirectMainHandler = useRedirect('/')

    return (
        <div className={styles.container}>
            <Button
                onClick={redirectMainHandler}
                text="Back"
                color="transparent"
                size="small"
            />
            <Text text="Profile" size="h3" />
            <Button text="Save" color="transparent" size="small" />
        </div>
    )
}

export default ProfileHeader
