import Image from 'next/image'

import UserExample from '@/assets/images/examples/Artist-example.png'

import styles from '../Profile.module.scss'
import { Tabs } from '@/app/profile/Tabs/Tabs'

const Profile = () => {
    return (
        <div>
            <div className={styles.userInfo}>
                <div className={styles.avatar}>
                    <Image
                        className={styles.userIcon}
                        src={UserExample}
                        alt="user avatar"
                    />
                </div>
                <div className={styles.info}>
                    <p className={styles.profileText}>Your profile</p>
                    <div className={styles.followersInfo}>
                        <h2 className={styles.name}>Rogachev Egor</h2>
                        <div className={styles.details}>
                            <p>23 Playlists</p>
                            <p>• 21 Followers</p>
                            <p>• 103 Following</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.page}>
                <div className={styles.tabs}></div>
                <div className={styles.currentTab}>
                    <Tabs />
                </div>
            </div>
        </div>
    )
}

export default Profile
