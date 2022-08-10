import { FC } from 'react'
import cn from 'classnames'

import { InputProps } from './Input.interfaces'

import styles from './Input.module.scss'

const Input: FC<InputProps> = ({
    error,
    className,
    color,
    ...props
}) => {
    return (
        <input
            className={cn(className, styles.container, {
                [styles.dark]: color === 'dark',
                [styles.light]: color === 'light',
                [styles.transparent]: color === 'transparent',
                [styles.error]: error,
            })}
            {...props}
        />
    )
}

export default Input
