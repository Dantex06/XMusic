'use client'

import { Header, Menu } from '@/components'
import { ProfileMenu } from '@/components/ProfileMenu/ProfileMenu'

import { usePathname } from 'next/navigation'
import { staticLinks } from '@/assets/routingLinks'

import styles from './RouteLayout.module.scss'
import dynamic from 'next/dynamic'
import clsx from 'clsx'

export const RouteLayoutDynamic = dynamic(
    () => import('@/app/utils/RouteLayout/RouteLayout'),
    {
        ssr: false,
    }
)

export default function RouteLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const pathname = usePathname()
    const isAuthPage = ![staticLinks.register, staticLinks.login].includes(
        pathname
    )

    return (
        <div className={clsx(styles.app, { [styles.appBlock]: !isAuthPage })}>
            {isAuthPage && <Menu />}
            {isAuthPage && <Header />}
            <div className={clsx({ [styles.main]: isAuthPage })}>
                {children}
            </div>
            {isAuthPage && <ProfileMenu />}
        </div>
    )
}
