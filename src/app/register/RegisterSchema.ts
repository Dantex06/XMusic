import * as yup from 'yup'

export const RegisterSchema = yup.object().shape({
    email: yup
        .string()
        .required('Email is required')
        .email('Enter a valid email address'),
    name: yup
        .string()
        .required('Login is required')
        .test(
            'login-length',
            'Login must be at least 6 characters long',
            function (value) {
                return value ? value.length >= 6 : true
            }
        ),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long'),
})
