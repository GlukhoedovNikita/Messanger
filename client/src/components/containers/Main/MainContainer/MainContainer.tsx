import { FC } from 'react'

import MainContact from '../MainContact/MainContact'
import MainWrite from '../MainWrite/MainWrite'
import MessageList from '../Message/MessageList/MessageList'

import styles from './MainContainer.module.scss'

const MainContainer: FC = () => {
    return (
        <div className={styles.container}>
            <MainContact />
            <MessageList />
            <MainWrite />
        </div>
    )
}

export default MainContainer
