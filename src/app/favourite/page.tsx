import { MusicItem } from '@/components/MusicItem'

import styles from './Favourite.module.scss'

const Favourite = () => {
    return (
        <div className={styles.favouritePage}>
            <div className={styles.musicItems}>
                <MusicItem />
                <MusicItem />
                <MusicItem />
            </div>
        </div>
    )
}

export default Favourite
