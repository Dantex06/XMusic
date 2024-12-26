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
    access_token: string
    refresh_token: string
    id: string
    name: string
    email: string
}
