'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

import {
    Friends,
    Playing,
    Settings,
} from '@/widgets/ProfileMenu/components/sections'

import ArrowIcon from '@/assets/icons/main/arrow.svg'
import ProfileIcon from '@/assets/icons/main/user.svg'

import styles from './ProfileMenu.module.scss'

export const ProfileMenu = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [pageMenu, setPageMenu] = useState<string>('friends')

    const modalHandler = () => {
        setOpenModal(!openModal)
    }
    
    const menuPage = () => {
        switch (pageMenu) {
            case 'friends':
                return <Friends />
            case 'playing':
                return <Playing />
            case 'settings':
                return <Settings />
        }
    }

    return (
        <div className={styles.profileMenu}>
            <div className={styles.modalSection}>
                <div
                    className={clsx(styles.modalBorder, {
                        [styles.modalBorderOpen]: openModal,
                    })}
                >
                    <div className={styles.profileSection}>
                        <div className={styles.profile}>
                            <div className={styles.profileIconContainer}>
                                <ProfileIcon />
                            </div>
                            <p>Egor Rogachev</p>
                        </div>
                        <div
                            onClick={modalHandler}
                            className={clsx(styles.openProfile, {
                                [styles.closeProfile]: openModal,
                            })}
                        >
                            <ArrowIcon />
                        </div>
                    </div>
                    {openModal && (
                        <div className={styles.modal}>
                            <button className={styles.modalButton}>
                                Account
                            </button>
                            <button
                                className={styles.modalButton}
                                onClick={() => setPageMenu('friends')}
                            >
                                Friends
                            </button>
                            <button
                                className={styles.modalButton}
                                onClick={() => setPageMenu('playing')}
                            >
                                Now playing
                            </button>
                            <button
                                className={styles.modalButton}
                                onClick={() => setPageMenu('settings')}
                            >
                                Settings
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.infoSection}>{menuPage()}</div>
        </div>
    )
}
