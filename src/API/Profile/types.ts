export type TLoginRequest = {
    email?: string
    name?: string
    password: string
}

export type TRegisterRequest = {
    email: string
    name: string
    password: string
}

export type TAuthResponse = {
    tokens: {
        accessToken: string
        refreshToken: string
    }
}
