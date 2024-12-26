import Image from 'next/image'

import ArtistImage from '@/assets/images/examples/Artist-example.png'

import styles from './ArtistItem.module.scss'

export const ArtistItem = () => {
    return (
        <div className={styles.artistItem}>
            <div className={styles.profileIcon}>
                <Image src={ArtistImage} alt="artist" />
            </div>
            <div className={styles.textSection}>
                <p className={styles.title}>Harry Styles</p>
                <p>256456 listeners</p>
            </div>
        </div>
    )
}
