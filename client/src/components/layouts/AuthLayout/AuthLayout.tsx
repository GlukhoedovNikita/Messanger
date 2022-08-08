import { FC } from 'react'
import cn from 'classnames'

import { AuthLayoutProps } from './AuthLayout.interfaces'

import styles from './AuthLayout.module.scss'

const AuthLayout: FC<AuthLayoutProps> = ({ children, className, ...props }) => {
    return (
        <div
            className={cn(styles.container, className)}
            {...props}
        >
            {children}
        </div>
    )
}

export default AuthLayout
