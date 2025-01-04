'use client'

import userIcon from '@/assets/images/examples/Artist-example.png'

import styles from './ProfileButton.module.scss'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { staticLinks } from '@/assets/routingLinks'

export const ProfileButton = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement | null>(null)
    const router = useRouter()

    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (!ref.current) {
                return
            }
            if (!ref.current.contains(event.target as Node)) {
                setOpenModal(false)
            }
        }
        document.addEventListener('click', handler, true)
        return () => {
            document.removeEventListener('click', handler)
        }
    }, [])

    return (
        <div
            ref={ref}
            className={clsx(styles.backgroundProfile, {
                [styles.showBackground]: openModal,
            })}
        >
            <div className={styles.profile}>
                <Image
                    src={userIcon}
                    alt={'profile icon'}
                    className={styles.userIcon}
                    onClick={() => setOpenModal(!openModal)}
                />
                {openModal && (
                    <div className={styles.modal}>
                        <button
                            className={styles.modalButton}
                            onClick={() => router.push(staticLinks.profile)}
                        >
                            Account
                        </button>
                        <button
                            className={styles.modalButton}
                            onClick={() => router.push(staticLinks.main)}
                        >
                            Home
                        </button>
                        <button
                            className={styles.modalButton}
                            onClick={() =>
                                router.push(staticLinks.profileFriends)
                            }
                        >
                            Friends
                        </button>
                        <button
                            className={styles.modalButton}
                            onClick={() =>
                                router.push(staticLinks.profileSettings)
                            }
                        >
                            Settings
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
