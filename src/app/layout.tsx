import type { Metadata } from 'next'

import { Menu } from '@/components/Menu/Menu'
import { Header } from '@/components/Header/Header'

import styles from './layout.module.scss'
import '@/assets/styles/index.scss'

export const metadata: Metadata = {
    title: 'XMusic - Главная страница',
    description: 'Generated by create next app',
    icons: {
        icon: [
            {
                url: './images/favicon.png',
            },
        ],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ru">
            <body>
                <div className={styles.app}>
                    <Menu />
                    <Header />
                    <div className={styles.main}>{children}</div>
                </div>
            </body>
        </html>
    )
}
