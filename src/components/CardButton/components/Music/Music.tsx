import Image from 'next/image'

import ExampleMusic from '@/assets/images/examples/MusicCard-example.png'

import PlayIcon from '@/assets/icons/main/play.svg'

import styles from './Music.module.scss'

export const MusicItem = () => {
    return (
        <div className={styles.card}>
            <div className={styles.imageSection}>
                <Image src={ExampleMusic} alt={'song image'} />
                <div className={styles.playIcon}>
                    <PlayIcon />
                </div>
            </div>
            <div className={styles.infoSection}>
                <p className={styles.title}>The Final Frontier</p>
                <p className={styles.artists}>Bones</p>
            </div>
        </div>
    )
}
