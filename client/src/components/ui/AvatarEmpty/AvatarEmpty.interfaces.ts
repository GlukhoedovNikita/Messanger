import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface AvatarEmptyProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    image?: boolean,
    size: 'big' | 'medium',
    color?: 'dark' | 'light',
}
