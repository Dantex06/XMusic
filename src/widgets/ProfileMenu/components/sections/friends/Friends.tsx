import Image from 'next/image'

import UserExample from '@/assets/images/examples/User-example.png'
import User2Example from '@/assets/images/examples/Artist-example.png'
import ShareIcon from '@/assets/icons/main/share-audio.svg'

import styles from './Friends.module.scss'
import SearchIcon from '@/assets/icons/main/search.svg'

export const Friends = () => {
    return (
        <div>
            <div className={styles.titleInfo}>
                <h3 className={styles.title}>Your friends</h3>
                <div className={styles.search}>
                    <SearchIcon />
                </div>
            </div>
            <div className={styles.friendsInfo}>
                <div className={styles.user}>
                    <Image
                        className={styles.userIcon}
                        src={UserExample}
                        alt="logo"
                    />
                    <p className={styles.userName}>James Rodriguez</p>
                    <div className={styles.shareIcon}>
                        <ShareIcon />
                    </div>
                </div>
                <div className={styles.user}>
                    <Image
                        className={styles.userIcon}
                        src={User2Example}
                        alt="logo"
                    />
                    <p className={styles.userName}>Fernando Alonso</p>
                    <div className={styles.shareIcon}>
                        <ShareIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
