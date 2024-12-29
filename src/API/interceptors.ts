import axios from 'axios'
import Cookies from 'js-cookie'
import { AuthEndpoints } from '@/API/Profile/AuthEndpoints'
import { getCookie, setCookie } from 'cookies-next'

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
})

const urlSkipAuth = [
    AuthEndpoints.Login,
    AuthEndpoints.Register,
    AuthEndpoints.Refresh,
    AuthEndpoints.Logout,
]

axiosInstance.interceptors.request.use(async (config) => {
    const accessToken = Cookies.get('accessToken')
    if (accessToken) {
        const authorization = `Bearer ${accessToken}`
        config.headers.set('Authorization', `Bearer ${authorization}`)
    }
    return config
})

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config

        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry &&
            !urlSkipAuth.includes(originalRequest.url)
        ) {
            originalRequest._retry = true

            try {
                const response = await axiosInstance.post(
                    AuthEndpoints.Refresh,
                    {
                        RefreshToken: getCookie('refreshToken'),
                    }
                )
                setCookie('refreshToken', response.data.tokens.refreshToken)
                setCookie('accessToken', response.data.tokens.accessToken)

                originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`
                return axiosInstance(originalRequest)
            } catch (refreshError) {
                console.error('Ошибка при обновлении токена:', refreshError)
            }
        }
        return Promise.reject(error)
    }
)

export default axiosInstance
