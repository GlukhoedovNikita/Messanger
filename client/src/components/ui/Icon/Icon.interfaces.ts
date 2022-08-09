import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IconProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string,
    image: string,
    alt: string,
    hover?: 'blue' | 'scale',
    size: 'big' | 'medium',
}
