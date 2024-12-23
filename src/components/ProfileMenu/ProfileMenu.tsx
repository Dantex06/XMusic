'use client'

import { useState } from 'react'
import clsx from 'clsx'

import { Profile } from '@/components'
import { Friends } from '@/components/ProfileMenu/components/sections/friends/Friends'
import { Playing } from '@/components/ProfileMenu/components/sections/playing/Playing'

import ArrowIcon from '@/assets/icons/main/arrow.svg'

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
                            <Profile />
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
                            <button className={styles.modalButton}>
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
