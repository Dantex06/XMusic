'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppSelector, useAppDispatch } from '@/store'
import { registerRequest } from '@/API/Profile/AuthService'

import { TRegisterRequest } from '@/API/Profile/types'

import EyeOpenIcon from '@/assets/icons/main/eye-open.svg'
import EyeCloseIcon from '@/assets/icons/main/eye-close.svg'

import styles from './Register.module.scss'
import { useState } from 'react'
import Link from 'next/link'
import { staticLinks } from '@/assets/routingLinks'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterSchema } from '@/app/register/RegisterSchema'
import { LoadingSpinner } from '@/components'
import clsx from 'clsx'

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TRegisterRequest>({ resolver: yupResolver(RegisterSchema) })
    const { isLoading, error } = useAppSelector((state) => state.profile)
    const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<TRegisterRequest> = (data) => {
        console.log(data)
        dispatch(registerRequest(data))
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
                    Register to <span className={styles.logoLetter}>X</span>
                    Music
                </p>
                <div className={styles.fields}>
                    <div className={styles.fieldBlock}>
                        <p className={styles.label}>Email</p>
                        <input
                            className={styles.field}
                            placeholder="email@example.com"
                            {...register('email', { required: true })}
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
                            {...register('name', { required: true, min: 6 })}
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
                            Register
                        </button>
                        {error && (
                            <span className={styles.errorMessage}>{error}</span>
                        )}
                    </div>
                </div>
                <p className={styles.loginLink}>
                    Have account?{' '}
                    <Link className={styles.login} href={staticLinks.login}>
                        Login
                    </Link>
                </p>
            </div>
            {isLoading && <LoadingSpinner />}
        </form>
    )
}

export default RegisterPage
