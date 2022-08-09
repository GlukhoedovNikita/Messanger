import { FC } from 'react'

import useRedirect from '@hooks/useRedirect'

import ContactList from '../Contact/ContactList/ContactList'
import Input from '@components/ui/Input/Input'
import Button from '@components/ui/Button/Button'

import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
    const redirectProfileHandler = useRedirect('/profile')

    return (
        <div className={styles.container}>
            <div className={styles.blockSearch}>
                <Button
                    onClick={redirectProfileHandler}
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
