import { MusicItem } from '@/components/MusicItem'

import styles from './Recently.module.scss'

const Recently = () => {
    return (
        <div className={styles.recentlyPage}>
            <div className={styles.musicItems}>
                <MusicItem />
                <MusicItem />
                <MusicItem />
            </div>
        </div>
    )
}

export default Recently
