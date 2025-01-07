import type { Metadata } from 'next'

import '@/assets/styles/index.scss'
import { RouteLayoutDynamic, ErrorBoundary } from '@/utils/layouts'

export const metadata: Metadata = {
    title: 'XMusic',
    description: 'Musical hosting service',
    icons: {
        icon: [
            {
                url: './images/faviconown.png',
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
                <ErrorBoundary>
                    <RouteLayoutDynamic>{children}</RouteLayoutDynamic>
                </ErrorBoundary>
            </body>
        </html>
    )
}
