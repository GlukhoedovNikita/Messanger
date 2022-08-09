import { FC } from 'react'
import cn from 'classnames'

import { InputProps } from './Input.interfaces'

import styles from './Input.module.scss'

const Input: FC<InputProps> = ({
    className,
    color,
    type = 'text',
    placeholder = '',
    disabled = false,
    ...props
}) => {
    return (
        <input
            className={cn(className, styles.container, {
                [styles.dark]: color === 'dark',
                [styles.light]: color === 'light',
                [styles.transparent]: color === 'transparent',
            })}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            {...props}
        />
    )
}

export default Input
