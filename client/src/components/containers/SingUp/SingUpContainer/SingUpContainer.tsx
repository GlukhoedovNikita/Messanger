import { FC } from 'react'
import * as yup from 'yup'
import cn from 'classnames'
import { yupResolver } from '@hookform/resolvers/yup'
import { FieldValues, useForm } from 'react-hook-form'

import useRedirect from '@hooks/useRedirect'
import useTypedDispatch from '@hooks/userTypedDispatch'
import { updateUserTemplateRegistration } from '@store/slices/auth/auth.slice'

import Button from '@components/ui/Button/Button'
import Text from '@components/ui/Text/Text'

import styles from './SingUpContainer.module.scss'

import validationError from '@utils/validationError'

const schema = yup.object().shape({
    email: yup.string().email(validationError('Email', 'email'))
        .required(validationError('Email', 'required')),
    login: yup.string().required(validationError('Login', 'required')),
    name: yup.string().required(validationError('First name', 'required')),
    lastname: yup.string().required(validationError('Last name', 'required')),
})

const SingUpContainer: FC = () => {
    const dispatch = useTypedDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const redirectNextHandler = useRedirect('/singup/result')
    const redirectSingInHandler = useRedirect('/')

    const onSubmit = (data: FieldValues) => {
        dispatch(updateUserTemplateRegistration(data))
        redirectNextHandler()
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
                    <Text text="Email" size="h4" color="grey" />
                    <input
                        className={cn(styles.input, {
                            [styles.error]: !!errors?.email
                        })}
                        {...register('email')}
                    />
                    {
                        errors?.email?.message &&
                        <Text text={String(errors?.email?.message)} size="h4" color="red" />
                    }
                </div>
                <div className={styles.blockText}>
                    <Text text="Login" size="h4" color="grey" />
                    <input
                        className={cn(styles.input, {
                            [styles.error]: !!errors?.login
                        })}
                        {...register('login')}
                    />
                    {
                        errors?.login?.message &&
                        <Text text={String(errors?.login?.message)} size="h4" color="red" />
                    }
                </div>
                <div className={styles.blockText}>
                    <Text text="First name" size="h4" color="grey" />
                    <input
                        className={cn(styles.input, {
                            [styles.error]: !!errors?.name
                        })}
                        {...register('name')}
                    />
                    {
                        errors?.name?.message &&
                        <Text text={String(errors?.name?.message)} size="h4" color="red" />
                    }
                </div>
                <div className={styles.blockText}>
                    <Text text="Last name" size="h4" color="grey" />
                    <input
                        className={cn(styles.input, {
                            [styles.error]: !!errors?.lastname
                        })}
                        {...register('lastname')}
                    />
                    {
                        errors?.lastname?.message &&
                        <Text text={String(errors?.lastname?.message)} size="h4" color="red" />
                    }
                </div>
            </div>
            <div className={styles.blockButton}>
                <Button
                    type="submit"
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
        </form>
    )
}

export default SingUpContainer
