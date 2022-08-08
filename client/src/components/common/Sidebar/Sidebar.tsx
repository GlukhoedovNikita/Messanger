import { FC } from 'react'

import ContactList from '../Contact/ContactList/ContactList'
import Input from '@components/ui/Input/Input'
import Button from '@components/ui/Button/Button'

import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.blockSearch}>
                <Button
                    className={styles.buttonProfile}
                    text="Profile"
                    size="small"
                    color="transparent"
                />
                <Input type="text" placeholder="Search" color="light" />
            </div>
            <ContactList />
        </div>
    )
}

export default Sidebar
