import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string,
    text: string,
    color: 'blue' | 'transparent' | 'red',
    size: 'big' | 'medium' | 'small',
}
