import Image from 'next/image'

import PopularSingerImage from '@/assets/images/examples/PopularSinger-example.png'

import styles from './CardPopular.module.scss'

export const CardPopular = () => {
    return (
        <div className={styles.cardPopular}>
            <div className={styles.info}>
                <p className={styles.title}>Ed Sheeran</p>
                <div className={styles.buttons}>
                    <button className={styles.playButton}>PLAY</button>
                    <button className={styles.followButton}>FOLLOW</button>
                </div>
            </div>
            <div className={styles.avatar}>
                <Image src={PopularSingerImage} alt={'Popular singer'} />
            </div>
        </div>
    )
}
