'use client'

import { usePathname } from 'next/navigation'
import { staticLinks } from '@/assets/routingLinks'

import styles from './Menu.module.scss'

export const Menu = () => {
    const pathname = usePathname()
    if (![staticLinks.register, staticLinks.login].includes(pathname)) {
        return (
            <div className={styles.menu}>
                <h2 className={styles.title}>XMusic</h2>
            </div>
        )
    }
}
