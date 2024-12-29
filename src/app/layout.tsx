import type { Metadata } from 'next'

import '@/assets/styles/index.scss'
import { RouteLayoutDynamic, IsAuthLayoutDynamic } from '@/utils/layouts'

export const metadata: Metadata = {
    title: 'XMusic',
    description: 'Musical hosting service',
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
                <RouteLayoutDynamic>
                    <IsAuthLayoutDynamic>
                        <div>{children}</div>
                    </IsAuthLayoutDynamic>
                </RouteLayoutDynamic>
            </body>
        </html>
    )
}
