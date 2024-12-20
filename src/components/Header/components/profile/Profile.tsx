'use client'

import ProfileIcon from '@/assets/icons/main/user.svg'

import styles from './Profile.module.scss'
import { useEffect, useRef, useState } from 'react'

export const Profile = () => {
    const modalRef = useRef<HTMLDivElement>(null)
    const [showModal, setShowModal] = useState<boolean>(false)

    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (
                !modalRef.current ||
                modalRef.current.contains(event.target as Node)
            ) {
                return
            }
            setShowModal(false)
        }
        document.addEventListener('click', handler, true)
        return () => document.removeEventListener('click', handler)
    }, [])

    const openModal = () => setShowModal(!showModal)

    return (
        <div ref={modalRef} className={styles.profile}>
            <div onClick={openModal} className={styles.profileIconContainer}>
                <ProfileIcon />
            </div>
            {showModal && (
                <div className={styles.modal}>
                    <a href="" className={styles.button}>
                        Profile
                    </a>
                    <button className={styles.button}>Theme</button>
                    <a href="" className={styles.button}>
                        Settings
                    </a>
                    <span className={styles.line}></span>
                    <a href="" className={styles.button}>
                        Exit
                    </a>
                </div>
            )}
        </div>
    )
}
