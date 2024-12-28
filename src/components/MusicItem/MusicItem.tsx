import Image from 'next/image'

import MusicExampleImage from '@/assets/images/examples/MusicCard-example.png'
import PlayIcon from '@/assets/icons/main/playItem.svg'
import DeleteIcon from '@/assets/icons/main/cross.svg'
import AddIcon from '@/assets/icons/main/addItem.svg'

import styles from './MusicItem.module.scss'

export const MusicItem = () => {
    return (
        <div className={styles.musicItem}>
            <Image
                className={styles.musicImage}
                src={MusicExampleImage}
                alt="Music item"
            />
            <div className={styles.infoSection}>
                <div className={styles.textSection}>
                    <p className={styles.musicTitle}>The Final Frontier</p>
                    <span className={styles.musicArtists}>Bones</span>
                </div>
                <div className={styles.buttonSection}>
                    <div className={styles.playIcon}>
                        <PlayIcon />
                    </div>
                    <div className={styles.closeIcon}>
                        <DeleteIcon />
                    </div>
                    {/*<div className={styles.addIcon}>*/}
                    {/*    <AddIcon />*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}
