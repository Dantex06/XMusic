'use client'

import { Provider } from 'react-redux'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import clsx from 'clsx'

import store from '@/store'

import { Header, Menu, AudioPlayer, ProfileMenu } from '@/widgets'

import { useScreenDetector } from '@/utils/hooks/useScreenDetector'

import { staticLinks } from '@/assets/routingLinks'

import styles from './RouteLayout.module.scss'

export const RouteLayoutDynamic = dynamic(
    () => import('@/utils/layouts/RouteLayout/RouteLayout'),
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
                <AudioPlayer />
            </div>
        </Provider>
    )
}
