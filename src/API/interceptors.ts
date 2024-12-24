import axios from 'axios'
import Cookies from 'js-cookie'
import { AuthEndpoints } from '@/API/Profile/AuthEndpoints'

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
})

console.log(process.env.NEXT_PUBLIC_BACKEND_URL)

axiosInstance.interceptors.request.use(async (config) => {
    const accessToken = Cookies.get('access_token')
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
            !originalRequest._retry
        ) {
            originalRequest._retry = true
            try {
                const response = await axiosInstance.post(
                    AuthEndpoints.Refresh,
                    {
                        refresh: Cookies.get('refresh'),
                    }
                )
                Cookies.set('access_token', response.data.access)

                originalRequest.headers.Authorization = `Bearer ${response.data.access}`
                return axiosInstance(originalRequest)
            } catch (refreshError) {
                console.error('Ошибка при обновлении токена:', refreshError)
            }
        }
        return Promise.reject(error)
    }
)

export default axiosInstance
