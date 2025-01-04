import { Notification, Route } from '@/widgets/Header/components'

import SearchIcon from '@/assets/icons/main/search.svg'

import styles from './Header.module.scss'
import { useScreenDetector } from '@/utils/hooks/useScreenDetector'
import { ProfileButton } from '@/widgets/Header/components/ProfileButton/ProfileButton'

export const Header = () => {
    const { width } = useScreenDetector()
    const showRoute = width > 1900

    return (
        <div className={styles.header}>
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
            {showRoute ? <Route /> : <ProfileButton />}
        </div>
    )
}
