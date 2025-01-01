import { CardPopular } from '@/widgets'
import { SectionList } from '@/components'

import { CardTypes } from '@/components/CardButton/types'

import styles from './page.module.scss'

export default function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.sections}>
                <CardPopular />
                <SectionList title="Playlist" type={CardTypes.Music} />
                <SectionList title="Genres" type={CardTypes.Genre} />
                <SectionList title="Genres" type={CardTypes.Genre} />
            </div>
        </div>
    )
}
