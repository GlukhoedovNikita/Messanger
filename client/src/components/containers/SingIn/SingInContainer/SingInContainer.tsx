import { FC, useEffect, useState } from 'react'
import cn from 'classnames'
import * as yup from 'yup'
import { FieldValues, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import useRedirect from '@hooks/useRedirect'
import useTypedDispatch from '@hooks/userTypedDispatch'
import useTypedSelector from '@hooks/useTypedSelector'

import { authLogin } from '@store/slices/auth/auth.actions'
import authSelector from '@store/slices/auth/auth.selector'

import Button from '@components/ui/Button/Button'
import Text from '@components/ui/Text/Text'

import { IUserLogin } from '@store/slices/auth/auth.interfaces'

import styles from './SingInContainer.module.scss'

import validationError from '@utils/validationError'

const schema = yup.object().shape({
    login: yup.string().required(validationError('Login', 'required')),
    password: yup.string().min(3, validationError('Password', 'min 3'))
        .max(15, validationError('Password', 'max 15')).required(validationError('Password', 'required')),
})

// не получилось сделать со своим компонентом Input (не работает ...register)

const SingInContainer: FC = () => {
    const dispatch = useTypedDispatch()
    const { error } = useTypedSelector(authSelector)

    const redirectSingUpHandler = useRedirect('/singup')
    const redirectHomeHandler = useRedirect('/')

    const [errorLogin, setErrorLogin] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if (error && error.includes('Login Error')) setErrorLogin(true)
        setTimeout(() => setErrorLogin(false), 3000)
    }, [error])

    const onSubmit = (data: FieldValues) => {
        dispatch(authLogin(data as IUserLogin))
        redirectHomeHandler()
    }

    return (
        <form
            className={styles.container}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className={styles.blockTitle}>
                <Text text="SingIn" size="h1" />
            </div>
            <div className={styles.blockInput}>
                <div className={styles.blockText}>
                    <Text text="Login" size="h4" color="grey" />
                    <input
                        className={cn(styles.input, {
                            [styles.error]: !!errors?.login
                        })}
                        {...register('login')}
                        type="text"
                    />
                    {
                        errors?.login?.message
                        && <Text text={String(errors?.login?.message)} size="h4" color="red" />
                    }
                </div>
                <div className={styles.blockText}>
                    <Text text="Password" size="h4" color="grey" />
                    <input
                        className={cn(styles.input, {
                            [styles.error]: !!errors?.password
                        })}
                        {...register('password')}
                        type="password"
                    />
                    {
                        errors?.password?.message
                        && <Text text={String(errors?.password?.message)} size="h4" color="red" />
                    }
                </div>
                {
                    errorLogin &&
                    <Text
                        className={styles.blockError}
                        text="Incorrect login or password"
                        size="h4"
                        color="red"
                    />
                }
            </div>
            <div className={styles.blockButton}>
                <Button
                    type="submit"
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
        </form>
    )
}

export default SingInContainer
