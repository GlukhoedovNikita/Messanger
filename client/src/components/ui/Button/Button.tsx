import { FC } from 'react'
import cn from 'classnames'

import { ButtonProps } from './Button.interfaces'

import styles from './Button.module.scss'

const Button: FC<ButtonProps> = ({
    text,
    size,
    color,
    className,
    ...props
}) => {
    return (
        <button
            className={cn(className, styles.container, {
                [styles.blue]: color === 'blue',
                [styles.transparent]: color === 'transparent',
                [styles.red]: color === 'red',
                [styles.big]: size === 'big',
                [styles.medium]: size === 'medium',
                [styles.small]: size === 'small',
            })}
            {...props}
        >
            {text}
        </button>
    )
}

export default Button
