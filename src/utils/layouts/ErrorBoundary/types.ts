import { ReactNode } from 'react'

export interface ErrorBoundaryProps {
    children?: ReactNode
}

export interface State {
    hasError: boolean
}
