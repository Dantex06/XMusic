'use client'

import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { Profile } from '@/components'

import ArrowIcon from '@/assets/icons/main/arrow.svg'
import UserExample from '@/assets/images/User-example.png'
import ShareIcon from '@/assets/icons/main/share-audio.svg'
import SearchIcon from '@/assets/icons/main/search.svg'

import styles from './ProfileMenu.module.scss'

export const ProfileMenu = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    // const [pageMenu, setPageMenu] = useState<string | null>()

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
                            onClick={() => setOpenModal(!openModal)}
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
                            <button className={styles.modalButton}>
                                Friends
                            </button>
                            <button className={styles.modalButton}>
                                Theme
                            </button>
                            <button className={styles.modalButton}>
                                Now playing
                            </button>
                            <button className={styles.modalButton}>
                                Settings
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.infoSection}>
                <div className={styles.titleInfo}>
                    <h3 className={styles.title}>Your friends</h3>
                    <div className={styles.search}>
                        <SearchIcon />
                    </div>
                </div>
                <div className={styles.friendsInfo}>
                    <div className={styles.user}>
                        <Image src={UserExample} alt="logo" />
                        <p className={styles.userName}>James Rodriguez</p>
                        <div className={styles.shareIcon}>
                            <ShareIcon />
                        </div>
                    </div>
                    <div className={styles.user}>
                        <Image src={UserExample} alt="logo" />
                        <p className={styles.userName}>James Rodriguez</p>
                        <div className={styles.shareIcon}>
                            <ShareIcon />
                        </div>
                    </div>
                    <div className={styles.user}>
                        <Image src={UserExample} alt="logo" />
                        <p className={styles.userName}>James Rodriguez</p>
                        <div className={styles.shareIcon}>
                            <ShareIcon />
                        </div>
                    </div>
                    <div className={styles.user}>
                        <Image src={UserExample} alt="logo" />
                        <p className={styles.userName}>James Rodriguez</p>
                        <div className={styles.shareIcon}>
                            <ShareIcon />
                        </div>
                    </div>
                    <div className={styles.user}>
                        <Image src={UserExample} alt="logo" />
                        <p className={styles.userName}>James Rodriguez</p>
                        <div className={styles.shareIcon}>
                            <ShareIcon />
                        </div>
                    </div>
                    <div className={styles.user}>
                        <Image src={UserExample} alt="logo" />
                        <p className={styles.userName}>James Rodriguez</p>
                        <div className={styles.shareIcon}>
                            <ShareIcon />
                        </div>
                    </div>
                    <div className={styles.user}>
                        <Image src={UserExample} alt="logo" />
                        <p className={styles.userName}>James Rodriguez</p>
                        <div className={styles.shareIcon}>
                            <ShareIcon />
                        </div>
                    </div>
                    <div className={styles.user}>
                        <Image src={UserExample} alt="logo" />
                        <p className={styles.userName}>James Rodriguez</p>
                        <div className={styles.shareIcon}>
                            <ShareIcon />
                        </div>
                    </div>
                    <div className={styles.user}>
                        <Image src={UserExample} alt="logo" />
                        <p className={styles.userName}>James Rodriguez</p>
                        <div className={styles.shareIcon}>
                            <ShareIcon />
                        </div>
                    </div>
                    <div className={styles.user}>
                        <Image src={UserExample} alt="logo" />
                        <p className={styles.userName}>James Rodriguez</p>
                        <div className={styles.shareIcon}>
                            <ShareIcon />
                        </div>
                    </div>
                    <div className={styles.user}>
                        <Image src={UserExample} alt="logo" />
                        <p className={styles.userName}>James Rodriguez</p>
                        <div className={styles.shareIcon}>
                            <ShareIcon />
                        </div>
                    </div>
                    <div className={styles.user}>
                        <Image src={UserExample} alt="logo" />
                        <p className={styles.userName}>James Rodriguez</p>
                        <div className={styles.shareIcon}>
                            <ShareIcon />
                        </div>
                    </div>
                    <div className={styles.user}>
                        <Image src={UserExample} alt="logo" />
                        <p className={styles.userName}>James Rodriguez</p>
                        <div className={styles.shareIcon}>
                            <ShareIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
