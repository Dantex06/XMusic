export enum TSizeButton {
    'small',
    'medium',
    'large',
}

export enum TThemeButton {
    'rounded',
    'square',
}

export enum TColorButton {
    'default',
    'theme',
}

export type TButton = {
    className?: string
    onClick?: () => void
    size?: TSizeButton
    theme?: TThemeButton
    color?: TColorButton
}
