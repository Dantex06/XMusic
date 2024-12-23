import { useState } from 'react'
import Image from 'next/image'

import SongExample from '@/assets/images/Playing-example.jpg'
import PlayIcon from '@/assets/icons/main/play.svg'

import styles from './Playing.module.scss'

export const Playing = () => {
    const [focus, setFocus] = useState(false)

    return (
        <div>
            <div className={styles.mainInfo}>
                <p className={styles.playing}>Now playing</p>
                <div className={styles.imageBlock}>
                    <Image src={SongExample} alt="song playing" />
                </div>
                <div className={styles.trackInfo}>
                    <p className={styles.trackTitle}>Moscow</p>
                    <p className={styles.compositors}>
                        Aarne, BUSHIDO ZHO, Markul
                    </p>
                </div>
                <div className={styles.nextTrack}>
                    <p className={styles.nextTitle}>Next track...</p>
                    <div
                        className={styles.nextTrackInfo}
                        onMouseEnter={() => setFocus(true)}
                        onMouseLeave={() => setFocus(false)}
                    >
                        <div className={styles.nextTrackIcon}>
                            <Image src={SongExample} alt="song next" />
                            {focus && (
                                <div className={styles.playIcon}>
                                    <PlayIcon />
                                </div>
                            )}
                        </div>
                        <div>
                            <p className={styles.nextTrackTitle}>Moscow</p>
                            <p className={styles.nextTrackCompositors}>
                                Aarne, BUSHIDO ZHO, Markul
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
