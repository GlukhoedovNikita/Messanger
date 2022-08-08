import { FC } from 'react'

import ContactItem from '../ContactItem/ContactItem'

import styles from './ContactList.module.scss'

const ContactList: FC = () => {
    return (
        <div className={styles.container}>
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
        </div>
    )
}

export default ContactList
