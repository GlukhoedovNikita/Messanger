import { FC } from 'react'
import cn from 'classnames'

import { IconProps } from './Icon.interfaces'

import styles from './Icon.module.scss'

const Icon: FC<IconProps> = ({
    className,
    image,
    alt,
    hover = 'blue',
    size,
    ...props
}) => {
    return (
        <button
            className={cn(styles.container, className, {
                [styles.hoverBlue]: hover === 'blue',
                [styles.hoverScale]: hover === 'scale',
                [styles.big]: size === 'big',
                [styles.medium]: size === 'medium',
            })}
            {...props}
        >
            <img
                className={styles.image}
                width={20}
                height={20}
                src={image}
                alt={alt}
            />
        </button>
    )
}

export default Icon
