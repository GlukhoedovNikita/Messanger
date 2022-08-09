import { FC } from 'react'
import cn from 'classnames'

import { AvatarEmptyProps } from './AvatarEmpty.interfaces'

import styles from './AvatarEmpty.module.scss'

import avatarEmptyImg from '@assets/img/avatar-empty.svg'

const AvatarEmpty: FC<AvatarEmptyProps> = ({
    className,
    image = false,
    size,
    color = 'light',
    ...props
}) => {
    return (
        <div
            className={cn(styles.container, className, {
                [styles.big]: size === 'big',
                [styles.medium]: size === 'medium',
                [styles.dark]: color === 'dark',
                [styles.light]: color === 'light',
            })}
            {...props}
        >
            {
                image && (
                    <img
                        width={40}
                        height={40}
                        src={avatarEmptyImg}
                        alt="AvatarEmpty"
                    />
                )
            }
        </div>
    )
}

export default AvatarEmpty
