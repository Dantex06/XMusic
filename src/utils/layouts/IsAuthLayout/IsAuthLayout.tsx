'use client'

import dynamic from 'next/dynamic'
import { redirect, usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { getCookie } from 'cookies-next'

import { useAppSelector } from '@/store'
import { staticLinks } from '@/assets/routingLinks'

export const IsAuthLayoutDynamic = dynamic(
    () => import('@/utils/layouts/IsAuthLayout/IsAuthLayout'),
    {
        ssr: false,
    }
)

export default function IsAuthLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const pathname = usePathname()
    const { isAuthenticated } = useAppSelector((state) => state.profile)
    const isAuthPage = ![staticLinks.register, staticLinks.login].includes(
        pathname
    )
    useEffect(() => {
        const isAuth = getCookie('refreshToken')
        if (!isAuthPage && isAuth) {
            redirect(staticLinks.main)
        }

        if (isAuthPage && !isAuth) {
            redirect(staticLinks.login)
        }
    }, [isAuthPage, isAuthenticated])

    return <>{children}</>
}
