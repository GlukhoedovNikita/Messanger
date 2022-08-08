import { FC } from 'react'

import useRedirect from '@hooks/useRedirect'

import Button from '@components/ui/Button/Button'
import Input from '@components/ui/Input/Input'
import Text from '@components/ui/Text/Text'

import styles from './SingUpResultContainer.module.scss'

const SingUpResultContainer: FC = () => {
    const redirectSingInHandler = useRedirect('/singin')

    return (
        <div className={styles.container}>
            <div className={styles.blockTitle}>
                <Text text="SingUp" size="h1" />
            </div>
            <div className={styles.blockInput}>
                <div className={styles.blockText}>
                    <Text text="Phone" size="h4" color="grey" />
                    <Input type="tel" color="dark" />
                </div>
                <div className={styles.blockText}>
                    <Text text="Password" size="h4" color="grey" />
                    <Input type="password" color="dark" />
                </div>
                <div className={styles.blockText}>
                    <Text text="Repeat password" size="h4" color="grey" />
                    <Input type="password" color="dark" />
                </div>
            </div>
            <div className={styles.blockButton}>
                <Button text="Sing Up" color="blue" size="big" />
                <Button
                    onClick={redirectSingInHandler}
                    className={styles.buttonSingUp}
                    text="SingIn"
                    color="transparent"
                    size="small"
                />
            </div>
        </div>
    )
}

export default SingUpResultContainer
