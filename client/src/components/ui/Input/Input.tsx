import { FC } from 'react'
import cn from 'classnames'

import { InputProps } from './Input.interfaces'

import styles from './Input.module.scss'

const Input: FC<InputProps> = ({
    className,
    color,
    type = 'text',
    placeholder = '',
    ...props
}) => {
    return (
        <input
            className={cn(className, styles.container, {
                [styles.dark]: color === 'dark',
                [styles.light]: color === 'light',
            })}
            placeholder={placeholder}
            type={type}
            {...props}
        />
    )
}

export default Input
