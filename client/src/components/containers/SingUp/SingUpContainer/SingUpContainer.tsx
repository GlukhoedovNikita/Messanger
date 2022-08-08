import { FC } from 'react'

import useRedirect from '@hooks/useRedirect'

import Button from '@components/ui/Button/Button'
import Input from '@components/ui/Input/Input'
import Text from '@components/ui/Text/Text'

import styles from './SingUpContainer.module.scss'

const SingUpContainer: FC = () => {
    const redirectNextHandler = useRedirect('result')
    const redirectSingInHandler = useRedirect('/singin')

    return (
        <div className={styles.container}>
            <div className={styles.blockTitle}>
                <Text text="SingUp" size="h1" />
            </div>
            <div className={styles.blockInput}>
                <div className={styles.blockText}>
                    <Text text="Email" size="h4" color="grey" />
                    <Input type="email" color="dark" />
                </div>
                <div className={styles.blockText}>
                    <Text text="Login" size="h4" color="grey" />
                    <Input color="dark" />
                </div>
                <div className={styles.blockText}>
                    <Text text="First name" size="h4" color="grey" />
                    <Input color="dark" />
                </div>
                <div className={styles.blockText}>
                    <Text text="Last name" size="h4" color="grey" />
                    <Input color="dark" />
                </div>
            </div>
            <div className={styles.blockButton}>
                <Button
                    onClick={redirectNextHandler}
                    text="Next"
                    color="blue"
                    size="big"
                />
                <Button
                    className={styles.buttonSingUp}
                    onClick={redirectSingInHandler}
                    text="SingIn"
                    color="transparent"
                    size="small"
                />
            </div>
        </div>
    )
}

export default SingUpContainer
