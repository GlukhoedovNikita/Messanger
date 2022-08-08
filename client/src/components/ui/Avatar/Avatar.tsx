import { FC } from 'react'
import cn from 'classnames'

import { AvatarProps } from './Avatar.interfaces'

import styles from './Avatar.module.scss'

const Avatar: FC<AvatarProps> = ({
    className,
    size,
    image,
    alt,
    ...props
}) => {
    return (
        <img
            className={cn(className, styles.container, {
                [styles.big]: size === 'big',
                [styles.medium]: size === 'medium',
            })}
            src={image}
            alt={alt}
            {...props}
        />
    )
}

export default Avatar
