import { FC } from 'react'
import cn from 'classnames'

import { ContactItemProps } from './ContactItem.interfaces'

import styles from './ContactItem.module.scss'
import AvatarEmpty from '@components/ui/AvatarEmpty/AvatarEmpty'
import Text from '@components/ui/Text/Text'

const ContactItem: FC<ContactItemProps> = ({
    className,
    ...props
}) => {
    return (
        <div
            className={cn(className, styles.container)}
            {...props}
        >
            <div className={styles.blockImage}>
                <AvatarEmpty size="medium" />
            </div>
            <div className={styles.blockContent}>
                <Text className={styles.name} text="Name" size="h3" />
                <Text className={styles.message} text="Message" size="h4" color="grey" />
                <Text className={styles.date} text="10:49" size="h4" color="grey" />
            </div>
        </div>
    )
}

export default ContactItem
