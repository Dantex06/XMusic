import { Route } from '@/components/Header/components/Route'
import { Notification } from '@/components/Header/components/Notification'

import SearchIcon from '@/assets/icons/main/search.svg'

import styles from './Header.module.scss'


export const Header = () => {
    return (
        <div className={styles.header}>
            <Route/>
            <div className={styles.searchNotification}>
                <form className={styles.search}>
                    <div className={styles.iconContainer}>
                        <SearchIcon />
                    </div>
                    <input
                        className={styles.input}
                        placeholder="Type here to search music..."
                    />
                </form>
                <Notification />
            </div>

        </div>
    )
}
