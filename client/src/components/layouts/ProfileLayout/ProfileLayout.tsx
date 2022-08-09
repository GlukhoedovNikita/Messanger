import { FC } from 'react'
import cn from 'classnames'

import ProfileHeader from '@components/containers/Proflie/ProfileHeader/ProfileHeader'

import { ProfileLayoutProps } from './ProfileLayout.interfaces'

import styles from './ProfileLayout.module.scss'

const ProfileLayout: FC<ProfileLayoutProps> = ({ className, children, ...props }) => {
    return (
        <div
            className={cn(className, styles.container)}
            {...props}
        >
            <ProfileHeader />
            <div className={styles.body}>
                {children}
            </div>
        </div>
    )
}

export default ProfileLayout
