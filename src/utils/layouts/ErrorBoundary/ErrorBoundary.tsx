'use client'

import React, { ErrorInfo } from 'react'

import { ErrorBoundaryProps, State } from '@/utils/layouts/ErrorBoundary/types'

import styles from './ErrorBoundary.module.scss'

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo)
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props

        const refreshPage = () => {
            window.location.reload()
        }

        if (hasError) {
            return (
                <div className={styles.errorPage}>
                    <h2 className={styles.logo}>
                        X<span>Music</span>
                    </h2>
                    <div className={styles.errorSection}>
                        <h1 className={styles.errorTitle}>
                            Something went wrong.
                        </h1>
                        <p className={styles.errorInfo}>Try reloading page</p>
                        <button
                            className={styles.errorButton}
                            onClick={refreshPage}
                        >
                            RELOAD PAGE
                        </button>
                    </div>
                </div>
            )
        }

        return children
    }
}
