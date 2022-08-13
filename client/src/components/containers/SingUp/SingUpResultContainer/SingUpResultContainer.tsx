import { FC, useEffect, useState } from 'react'
import cn from 'classnames'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FieldValues, useForm } from 'react-hook-form'

import useRedirect from '@hooks/useRedirect'
import useTypedDispatch from '@hooks/userTypedDispatch'
import useTypedSelector from '@hooks/useTypedSelector'

import authSelector from '@store/slices/auth/auth.selector'
import { authRegistration } from '@store/slices/auth/auth.actions'

import Button from '@components/ui/Button/Button'
import Text from '@components/ui/Text/Text'

import { IUserRegistration } from '@store/slices/auth/auth.interfaces'

import styles from './SingUpResultContainer.module.scss'

import validationError from '@utils/validationError'

const schema = yup.object().shape({
    phone: yup.string().required(validationError('Phone', 'required')),
    password: yup.string().required(validationError('Password', 'required'))
        .min(3, validationError('Password', 'min 3')).max(15, validationError('Password', 'max 15')),
    passwordConfirm: yup.string().required(validationError('Repeat password', 'required'))
        .oneOf([yup.ref('password')], validationError('Repeat password', 'oneOf')),
})

const SingUpResultContainer: FC = () => {
    const dispatch = useTypedDispatch()
    const { error, userTemplateRegistration } = useTypedSelector(authSelector)
    const [errorRegistration, setErrorRegistration] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const redirectHomeHandler = useRedirect('/')

    useEffect(() => {
        if (error && error.includes('Login Error')) setErrorRegistration(true)
        setTimeout(() => setErrorRegistration(false), 3000)
    }, [error])

    const onSubmit = (data: FieldValues) => {
        dispatch(authRegistration({ ...userTemplateRegistration, ...data as IUserRegistration }))
        redirectHomeHandler()
    }

    return (
        <form
            className={styles.container}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className={styles.blockTitle}>
                <Text text="SingUp" size="h1" />
            </div>
            <div className={styles.blockInput}>
                <div className={styles.blockText}>
                    <Text text="Phone" size="h4" color="grey" />
                    <input
                        className={cn(styles.input, {
                            [styles.error]: !!errors?.login
                        })}
                        {...register('phone')}
                        type="number"
                    />
                    {
                        errors?.login?.message &&
                        <Text text={String(errors?.login?.message)} size="h4" color="red" />
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
                        errors?.password?.message &&
                        <Text text={String(errors?.password?.message)} size="h4" color="red" />
                    }
                </div>
                <div className={styles.blockText}>
                    <Text text="Repeat password" size="h4" color="grey" />
                    <input
                        className={cn(styles.input, {
                            [styles.error]: !!errors?.passwordConfirm
                        })}
                        {...register('passwordConfirm')}
                        type="password"
                    />
                    {
                        errors?.passwordConfirm?.message &&
                        <Text text={String(errors?.passwordConfirm?.message)} size="h4" color="red" />
                    }
                </div>
                {
                    errorRegistration &&
                    <Text
                        className={styles.blockError}
                        text="Unknown error"
                        size="h4"
                        color="red"
                    />
                }
            </div>
            <div className={styles.blockButton}>
                <Button
                    type="submit"
                    text="Sing Up"
                    color="blue"
                    size="big"
                />
                <Button
                    onClick={redirectHomeHandler}
                    className={styles.buttonSingUp}
                    text="SingIn"
                    color="transparent"
                    size="small"
                />
            </div>
        </form>
    )
}

export default SingUpResultContainer
