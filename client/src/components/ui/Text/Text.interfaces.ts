import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    size: 'h1' | 'h2' | 'h3' | 'h4',
    color?: 'white' | 'grey' | 'red',
    text: string,
}
