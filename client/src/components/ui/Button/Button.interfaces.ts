import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string,
    text: string,
    color: 'blue' | 'transparent' | 'red',
    size: 'big' | 'medium' | 'small',
}
