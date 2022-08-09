import { FC } from 'react'

import AvatarEmpty from '@components/ui/AvatarEmpty/AvatarEmpty'
import Icon from '@components/ui/Icon/Icon'
import Text from '@components/ui/Text/Text'

import styles from './MainContact.module.scss'

import settingImg from '@assets/img/setting.svg'

const MainContact: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.blockContact}>
                <AvatarEmpty size="medium" />
                <Text text="Name" size="h3" />
            </div>
            <div className={styles.blockButton}>
                <Icon size="medium" image={settingImg} alt="setting" />
            </div>
        </div>
    )
}

export default MainContact
