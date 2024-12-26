'use client'

import { Header, Menu } from '@/components'
import { ProfileMenu } from '@/components/ProfileMenu/ProfileMenu'

import { usePathname } from 'next/navigation'
import { staticLinks } from '@/assets/routingLinks'

import styles from './RouteLayout.module.scss'
import dynamic from 'next/dynamic'
import clsx from 'clsx'
import store from '@/store'
import { Provider } from 'react-redux'
import { useScreenDetector } from '@/utils/hooks/useScreenDetector'

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
    const { width } = useScreenDetector()
    const hideMenus = width > 1900
    const isAuthPage = ![staticLinks.register, staticLinks.login].includes(
        pathname
    )
    console.log(width)
    return (
        <Provider store={store}>
            <div
                className={clsx(styles.app, {
                    [styles.appBlock]: !isAuthPage,
                    [styles.smallWindow]: !hideMenus,
                })}
            >
                {isAuthPage && hideMenus && <Menu />}
                {isAuthPage && <Header />}
                <div className={clsx({ [styles.main]: isAuthPage })}>
                    {children}
                </div>
                {isAuthPage && hideMenus && <ProfileMenu />}
            </div>
        </Provider>
    )
}
