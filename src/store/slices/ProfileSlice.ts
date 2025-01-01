import { createSlice } from '@reduxjs/toolkit'
import {
    loginRequest,
    logoutRequest,
    registerRequest,
} from '@/API/Profile/AuthService'
import { deleteCookie, setCookie } from 'cookies-next'

type Profile = {
    id: string | null
    name: string | null
    email: string | null
}

type ProfileState = {
    profile: Profile
    error: string | null
    isLoading: boolean
}

const initialState: ProfileState = {
    profile: {
        id: null,
        name: null,
        email: null,
    },
    error: null,
    isLoading: false,
}

const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(registerRequest.pending, (state) => {
            return { ...state, isLoading: true }
        })
        builder.addCase(registerRequest.fulfilled, (state, action) => {
            setCookie('refreshToken', action.payload.tokens.refreshToken)
            setCookie('accessToken', action.payload.tokens.accessToken)
            return { ...state, isLoading: false, isAuthenticated: true }
        })
        builder.addCase(registerRequest.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.name ?? null
            return { ...state, isLoading: false }
        })
        builder.addCase(loginRequest.pending, (state) => {
            return { ...state, isLoading: true }
        })
        builder.addCase(loginRequest.fulfilled, (state, action) => {
            setCookie('refreshToken', action.payload.tokens.refreshToken)
            setCookie('accessToken', action.payload.tokens.accessToken)
            return { ...state, isLoading: false }
        })
        builder.addCase(loginRequest.rejected, (state, action) => {
            return {
                ...state,
                isLoading: false,
                error: action.error.name || null,
            }
        })
        builder.addCase(logoutRequest.fulfilled, (state) => {
            deleteCookie('accessToken')
            deleteCookie('refreshToken')
            return { ...state }
        })
    },
})

export default ProfileSlice.reducer
