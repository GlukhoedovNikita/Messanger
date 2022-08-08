import { FC } from 'react'
import cn from 'classnames'

import { MainLayoutProps } from './MainLayout.interfaces'

import styles from './MainLayout.module.scss'
import Sidebar from '@components/common/Sidebar/Sidebar'

const MainLayout: FC<MainLayoutProps> = ({ children, className, ...props }) => {
    return (
        <div
            className={cn(className, styles.container)}
            {...props}
        >
            <Sidebar />
            <div className={styles.body}>
                {children}
            </div>
        </div>
    )
}

export default MainLayout
