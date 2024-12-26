import * as yup from 'yup'

export const LoginSchema = yup.object().shape({
    email: yup
        .string()
        .email('Enter a valid email address')
        .test(
            'email-or-login',
            'Email is required when login is empty',
            function (value) {
                const { login } = this.parent
                return !!(login || value)
            }
        ),
    name: yup
        .string()
        .test(
            'login-or-email',
            'Login is required when email is empty',
            function (value) {
                const { email } = this.parent
                return !!(email || value)
            }
        )
        .test(
            'login-length',
            'Login must be at least 6 characters long',
            function (value) {
                // Проверяем только если логин имеет значение
                return value ? value.length >= 6 : true
            }
        ),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long'),
})
