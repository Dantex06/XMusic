import styles from './LoadingSpinner.module.scss'
import clsx from 'clsx'
import { FC } from 'react'

type TLoadingSpinnerProps = {
    className?: string
}

export const LoadingSpinner: FC<TLoadingSpinnerProps> = ({ className }) => {
    return <div className={clsx(styles.spinner, className)}></div>
}
