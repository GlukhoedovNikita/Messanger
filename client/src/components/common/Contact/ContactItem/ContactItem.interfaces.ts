import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ContactItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
}
