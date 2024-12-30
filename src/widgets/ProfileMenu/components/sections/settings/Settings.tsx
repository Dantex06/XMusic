import { useAppDispatch } from '@/store'

import { logoutRequest } from '@/API/Profile/AuthService'

import styles from './Settings.module.scss'

export const Settings = () => {
    const dispatch = useAppDispatch()

    const exitHandler = () => {
        console.log('click')
        dispatch(logoutRequest())
    }

    const errorHandler = () => {
        throw new Error()
    }

    return (
        <div className={styles.mainInfo}>
            <p className={styles.sectionTitle}>Settings</p>
            <div className={styles.settingsSection}>
                <div className={styles.notificationBlock}>
                    <p>Enable notification</p>
                    <input type="checkbox" />
                </div>
                <button onClick={exitHandler} className={styles.button}>
                    Exit
                </button>
                <button onClick={errorHandler} className={styles.button}>
                    Throw error
                </button>
            </div>
        </div>
    )
}
