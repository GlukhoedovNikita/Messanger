import { FC } from 'react'

import useRedirect from '@hooks/useRedirect'

import Button from '@components/ui/Button/Button'
import Text from '@components/ui/Text/Text'

import styles from './SingInContainer.module.scss'
import Input from '@components/ui/Input/Input'

const SingInContainer: FC = () => {
    const redirectSingUpHandler = useRedirect('/singup')

    return (
        <div className={styles.container}>
            <div className={styles.blockTitle}>
                <Text text="SingIn" size="h1" />
            </div>
            <div className={styles.blockInput}>
                <div className={styles.blockText}>
                    <Text text="Login" size="h4" color="grey" />
                    <Input type="email" color="dark" />
                </div>
                <div className={styles.blockText}>
                    <Text text="Password" size="h4" color="grey" />
                    <Input type="password" color="dark" />
                </div>
            </div>
            <div className={styles.blockButton}>
                <Button
                    text="Sing In"
                    color="blue"
                    size="big"
                />
                <Button
                    onClick={redirectSingUpHandler}
                    className={styles.buttonCreate}
                    text="Create account"
                    color="transparent"
                    size="small"
                />
            </div>
        </div>
    )
}

export default SingInContainer
