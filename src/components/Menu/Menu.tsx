'use client'
import { usePathname } from 'next/navigation'

import { staticLinks } from '@/assets/routingLinks'
import { menuConfig } from '@/components/Menu/Menu-config'

import styles from './Menu.module.scss'

import clsx from 'clsx'
import Link from 'next/link'

export const Menu = () => {
    const pathname = usePathname()
    if ([staticLinks.register, staticLinks.login].includes(pathname)) {
        return
    }

    return (
        <div className={styles.menu}>
            <h2 className={styles.title}>XMusic</h2>
            <div className={styles.sections}>
                {menuConfig.map((menuSection) => {
                    return (
                        <div
                            className={styles.section}
                            key={menuSection.sectionTitle}
                        >
                            <p className={styles.sectionTitle}>
                                {menuSection.sectionTitle}
                            </p>
                            {menuSection.items.map((menuItem) => {
                                return menuItem?.link ? (
                                    <Link
                                        className={styles.sectionItem}
                                        key={menuItem.titleItem}
                                        href={menuItem.link}
                                    >
                                        {menuItem.icon}
                                        <div className={styles.selectBorder}>
                                            <p
                                                className={clsx(
                                                    styles.itemTitle,
                                                    {
                                                        [styles.itemTitleSelected]:
                                                            pathname ===
                                                            menuItem?.link,
                                                    }
                                                )}
                                            >
                                                {menuItem.titleItem}
                                            </p>
                                            {pathname === menuItem?.link && (
                                                <span
                                                    className={
                                                        styles.borderSelected
                                                    }
                                                ></span>
                                            )}
                                        </div>
                                    </Link>
                                ) : (
                                    <div
                                        className={styles.sectionItem}
                                        key={menuItem.titleItem}
                                    >
                                        {menuItem.icon}
                                        <p
                                            className={clsx(styles.itemTitle, {
                                                [styles.itemTitleSelected]:
                                                    pathname === menuItem?.link,
                                            })}
                                        >
                                            {menuItem.titleItem}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
