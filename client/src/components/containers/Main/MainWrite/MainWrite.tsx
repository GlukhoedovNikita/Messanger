import { FC } from 'react'

import Icon from '@components/ui/Icon/Icon'
import Input from '@components/ui/Input/Input'

import styles from './MainWrite.module.scss'

import filesImg from '@assets/img/files.svg'
import writeImg from '@assets/img/write.svg'

const MainWrite: FC = () => {
    return (
        <div className={styles.container}>
            <Icon size="big" image={filesImg} alt="files" />
            <Input type="text" placeholder="Message..." color="dark" />
            <Icon size="big" image={writeImg} alt="write" hover="scale" />
        </div>
    )
}

export default MainWrite
