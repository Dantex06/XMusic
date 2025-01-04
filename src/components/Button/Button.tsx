import { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'

import {
    TButton,
    TColorButton,
    TSizeButton,
    TThemeButton,
} from '@/components/Button/types'

import styles from './Button.module.scss'

export const Button: FC<PropsWithChildren<TButton>> = ({
    children,
    onClick,
    className,
    theme,
    size,
    color,
}) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                styles.button,
                {
                    [styles.ButtonRounded]: theme === TThemeButton.rounded,
                    [styles.ButtonSmall]: size === TSizeButton.small,
                    [styles.ButtonLarge]: size === TSizeButton.large,
                    [styles.ButtonThemeColor]: color === TColorButton.theme,
                },
                className
            )}
        >
            {children}
        </button>
    )
}
