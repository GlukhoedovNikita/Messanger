import { FC } from 'react'
import cn from 'classnames'

import { TextProps } from './Text.interfaces'

import styles from './Text.module.scss'

const Text: FC<TextProps> = ({
    text,
    size,
    color = 'white',
    className,
    ...props
}) => {
    return (
        <div
            className={cn(className, styles.container, {
                [styles.white]: color === 'white',
                [styles.grey]: color === 'grey',
                [styles.h1]: size === 'h1',
                [styles.h2]: size === 'h2',
                [styles.h3]: size === 'h3',
                [styles.h4]: size === 'h4',
            })}
            {...props}
        >
            {text}
        </div>
    )
}

export default Text
