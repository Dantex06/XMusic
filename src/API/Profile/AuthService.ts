import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCookie } from 'cookies-next'

import axiosInstance from '@/API/interceptors'
import { AuthEndpoints } from '@/API/Profile/AuthEndpoints'

import {
    TAuthResponse,
    TLoginRequest,
    TRegisterRequest,
} from '@/API/Profile/types'

export const registerRequest = createAsyncThunk(
    'profile/register',
    async (params: TRegisterRequest): Promise<TAuthResponse> => {
        console.log(params)
        const registerResponse = await axiosInstance.post(
            AuthEndpoints.Register,
            params
        )
        return registerResponse.data
    }
)

export const loginRequest = createAsyncThunk(
    'profile/login',
    async (params: TLoginRequest): Promise<TAuthResponse> => {
        console.log(params)
        const loginResponse = await axiosInstance.post(
            AuthEndpoints.Login,
            params
        )
        console.log(loginResponse.data)
        return loginResponse.data
    }
)

export const logoutRequest = createAsyncThunk('profile/logout', async () => {
    const refreshToken = getCookie('refreshToken')
    console.log('123')
    const logoutResponse = await axiosInstance.post(AuthEndpoints.Logout, {
        refreshToken,
    })
    return logoutResponse.data
})
