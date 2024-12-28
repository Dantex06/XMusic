'use client'
import { usePathname } from 'next/navigation'

import clsx from 'clsx'
import Link from 'next/link'

import AddIcon from '@/assets/icons/main/add.svg'

import styles from './Menu.module.scss'
import { useState } from 'react'
import { menuConfig, playlistConfig } from '@/widgets/Menu/Menu-config'

export const Menu = () => {
    const pathname = usePathname()
    const [playlist, setPlaylist] = useState<boolean>(true)

    const addPlaylist = (namePlaylist: string) => {
        console.log('adding', namePlaylist)
    }

    return (
        <div className={styles.menu}>
            <h2 className={styles.title}>
                X<span>Music</span>
            </h2>
            <div className={styles.sections}>
                {menuConfig.map((menuSection, index) => {
                    return (
                        <div className={styles.section} key={index}>
                            <p className={styles.sectionTitle}>
                                {menuSection.sectionTitle}
                            </p>
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
                <div className={styles.section}>
                    <div className={styles.sectionTitleBlock}>
                        <p className={styles.sectionTitle}>
                            {playlistConfig().sectionTitle}
                        </p>
                        <div
                            className={styles.addPlaylist}
                            onClick={() => setPlaylist(!playlist)}
                        >
                            <AddIcon />
                        </div>
                    </div>
                    <div>
                        {playlist && (
                            <form
                                className={styles.formPlaylist}
                                onSubmit={(event) => {
                                    event.preventDefault()
                                    const inputField = document.getElementById(
                                        'playlist'
                                    ) as HTMLInputElement
                                    addPlaylist(inputField.value)
                                    inputField.value = ''
                                }}
                            >
                                <input
                                    type="text"
                                    id="playlist"
                                    placeholder="Playlist name..."
                                    className={styles.inputField}
                                />
                            </form>
                        )}
                        {playlistConfig().items.map((menuItem) => {
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
                                    <div className={styles.selectBorder}>
                                        <p
                                            className={clsx(styles.itemTitle, {
                                                [styles.itemTitleSelected]:
                                                    pathname === menuItem?.link,
                                            })}
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
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
