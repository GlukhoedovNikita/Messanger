import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface AvatarProps extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    className?: string,
    image: string,
    alt: string,
    size: 'big' | 'medium',
}
