import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string,
    placeholder?: string,
    color: 'dark' | 'light',
    type?: 'password' | 'text' | 'email' | 'tel',
}
