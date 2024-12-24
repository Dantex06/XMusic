import { createSlice } from '@reduxjs/toolkit'
import { loginRequest, registerRequest } from '@/API/Profile/AuthService'

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
            state.isLoading = true
        })
        builder.addCase(registerRequest.fulfilled, (state, action) => {
            state.isLoading = false
            state.profile = action.payload
        })
        builder.addCase(registerRequest.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.name ?? null
        })
        builder.addCase(loginRequest.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(loginRequest.fulfilled, (state, action) => {
            state.isLoading = false
            state.profile = action.payload
        })
        builder.addCase(loginRequest.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.name ?? null
        })
    },
})

export default ProfileSlice.reducer
