import { Profile } from '@/components/Header/components/profile/Profile'

import SearchIcon from '@/assets/icons/main/search.svg'

import styles from './Header.module.scss'

export const Header = () => {
    return (
        <div className={styles.header}>
            <form className={styles.search}>
                <div className={styles.iconContainer}>
                    <SearchIcon />
                </div>
                <input
                    className={styles.input}
                    placeholder="Type here to search music..."
                />
            </form>

            <Profile />
        </div>
    )
}
