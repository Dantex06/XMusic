export type TLoginRequest = {
    email?: string
    login?: string
    password: string
}

export type TRegisterRequest = {
    email: string
    login: string
    password: string
}

export type TAuthResponse = {
    access_token: string
    refresh_token: string
    id: string
    name: string
    email: string
}
