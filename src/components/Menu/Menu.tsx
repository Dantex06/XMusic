'use client'
import { usePathname } from 'next/navigation'

import { menuConfig } from '@/components/Menu/Menu-config'

import clsx from 'clsx'
import Link from 'next/link'

import AddIcon from '@/assets/icons/main/add.svg'

import styles from './Menu.module.scss'

export const Menu = () => {
    const pathname = usePathname()

    return (
        <div className={styles.menu}>
            <h2 className={styles.title}>
                X<span>Music</span>
            </h2>
            <div className={styles.sections}>
                {menuConfig.map((menuSection, index) => {
                    return (
                        <div className={styles.section} key={index}>
                            {menuSection?.sectionTitle &&
                            menuSection.sectionTitle === 'PLAYLIST' ? (
                                <div className={styles.sectionTitleBlock}>
                                    <p className={styles.sectionTitle}>
                                        {menuSection.sectionTitle}
                                    </p>
                                    <AddIcon />
                                </div>
                            ) : (
                                <p className={styles.sectionTitle}>
                                    {menuSection.sectionTitle}
                                </p>
                            )}
                            <div>
                                {menuSection.items.map((menuItem) => {
                                    return (
                                        <Link
                                            className={styles.sectionItem}
                                            key={menuItem.titleItem}
                                            href={menuItem.link}
                                        >
                                            <div className={styles.icon}>
                                                {pathname === menuItem?.link
                                                    ? menuItem.iconSelected
                                                    : menuItem.icon}
                                            </div>
                                            <div
                                                className={styles.selectBorder}
                                            >
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
                                                {pathname ===
                                                    menuItem?.link && (
                                                    <span
                                                        className={
                                                            styles.borderSelected
                                                        }
                                                    ></span>
                                                )}
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
