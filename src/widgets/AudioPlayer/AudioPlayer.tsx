import Image from 'next/image'

import MusicExample from '@/assets/images/examples/MusicCard-example.png'
import LikeIcon from '@/assets/icons/player/Heart.svg'
import AddIcon from '@/assets/icons/player/add.svg'
import PreviousIcon from '@/assets/icons/player/previous.svg'
import NextIcon from '@/assets/icons/player/next.svg'
import PlayIcon from '@/assets/icons/player/play.svg'
import VolumeIcon from '@/assets/icons/player/volume.svg'

import styles from './AudioPlayer.module.scss'

export const AudioPlayer = () => {
    return (
        <div className={styles.audioPlayer}>
            <div className={styles.musicInfo}>
                <Image
                    className={styles.playingMusic}
                    src={MusicExample}
                    alt="playing music"
                />
                <div className={styles.musicText}>
                    <p className={styles.nameMusic}>The Final Frontier</p>
                    <p className={styles.artists}>Bones</p>
                </div>
                <div className={styles.musicButtons}>
                    <LikeIcon />
                    <AddIcon />
                </div>
            </div>
            <div className={styles.buttonSection}>
                <PreviousIcon />
                <PlayIcon />
                <NextIcon />
            </div>
            <div className={styles.volume}>
                <VolumeIcon />
                <div className={styles.volumeLine}>
                    <div className={styles.volumeSelector}></div>
                </div>
            </div>
        </div>
    )
}
