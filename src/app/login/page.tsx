'use client'

import styles from './Login.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'

type TFormFields = {
    email: string
    login: string
    password: string
}

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormFields>()
    const onSubmit: SubmitHandler<TFormFields> = (data) => console.log(data)
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.loginPage}>
            <div className={styles.blockSection}>
                <p className={styles.title}>
                    Login to <span className={styles.logoLetter}>X</span>Music
                </p>
                <div className={styles.fields}>
                    <div className={styles.fieldBlock}>
                        <p className={styles.label}>Email</p>
                        <input
                            className={styles.field}
                            placeholder="email@example.com"
                            {...register('email', { required: true })}
                        />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className={styles.fieldBlock}>
                        <p className={styles.label}>Login</p>
                        <input
                            className={styles.field}
                            placeholder="userName"
                            {...register('login')}
                        />
                    </div>
                    <div className={styles.fieldBlock}>
                        <p className={styles.label}>Password</p>
                        <input
                            className={styles.field}
                            placeholder="*******"
                            {...register('password', { required: true })}
                        />
                        {errors.password && <span>This field is required</span>}
                    </div>
                    <div>
                        <button className={styles.submitButton} type="submit">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default LoginPage
