'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppSelector, useAppDispatch } from '@/store'
import { loginRequest } from '@/API/Profile/AuthService'

import { LoginSchema } from '@/app/login/LoginSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { TLoginRequest } from '@/API/Profile/types'

import EyeOpenIcon from '@/assets/icons/main/eye-open.svg'
import EyeCloseIcon from '@/assets/icons/main/eye-close.svg'

import styles from './Login.module.scss'
import { useState } from 'react'
import Link from 'next/link'
import { staticLinks } from '@/assets/routingLinks'
import clsx from 'clsx'
import { LoadingSpinner } from '@/components'

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TLoginRequest>({
        resolver: yupResolver(LoginSchema),
    })
    const { isLoading, error } = useAppSelector((state) => state.profile)
    const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<TLoginRequest> = (data) => {
        console.log(data)
        dispatch(loginRequest(data))
    }
    const [showPassword, setShowPassword] = useState(false)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.loginPage}>
            <div
                className={clsx(styles.blockSection, {
                    [styles.blur]: isLoading,
                })}
            >
                <p className={styles.title}>
                    Login to <span className={styles.logoLetter}>X</span>Music
                </p>
                <div className={styles.fields}>
                    <div className={styles.fieldBlock}>
                        <p className={styles.label}>Email</p>
                        <input
                            className={styles.field}
                            placeholder="email@example.com"
                            {...register('email', { required: !errors.name })}
                        />
                        {errors.email && (
                            <span className={styles.errorMessage}>
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                    <div className={styles.fieldBlock}>
                        <p className={styles.label}>Login</p>
                        <input
                            className={styles.field}
                            placeholder="Username"
                            {...register('name', { min: 6 })}
                        />
                        {errors.name && (
                            <span className={styles.errorMessage}>
                                {errors.name.message}
                            </span>
                        )}
                    </div>
                    <div className={styles.fieldBlock}>
                        <p className={styles.label}>Password</p>
                        <input
                            className={styles.field}
                            placeholder="*******"
                            {...register('password', { required: true })}
                            type={showPassword ? 'text' : 'password'}
                        />
                        <div
                            className={styles.showPassword}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
                        </div>
                        {errors.password && (
                            <span className={styles.errorMessage}>
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    <div className={styles.buttonSection}>
                        <button className={styles.submitButton} type="submit">
                            Login
                        </button>
                        {error && (
                            <span className={styles.errorMessage}>{error}</span>
                        )}
                    </div>
                </div>
                <p className={styles.registerLink}>
                    No account?{' '}
                    <Link
                        className={styles.register}
                        href={staticLinks.register}
                    >
                        Register
                    </Link>
                </p>
            </div>
            {isLoading && <LoadingSpinner />}
        </form>
    )
}

export default LoginPage
