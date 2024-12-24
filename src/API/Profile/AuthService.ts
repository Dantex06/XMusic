import axiosInstance from '@/API/interceptors'

import { AuthEndpoints } from '@/API/Profile/AuthEndpoints'

import { TLoginRequest, TRegisterRequest } from '@/API/Profile/types'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const registerRequest = createAsyncThunk(
    'register/request',
    async (params: TRegisterRequest) => {
        console.log(params)
        const registerResponse = await axiosInstance.post(
            AuthEndpoints.Register,
            params
        )
        return registerResponse.data
    }
)

export const loginRequest = createAsyncThunk(
    'login/request',
    async (params: TLoginRequest) => {
        console.log(params)
        const registerResponse = await axiosInstance.post(
            AuthEndpoints.Login,
            params
        )
        console.log(registerResponse.data)
        return registerResponse.data
    }
)
