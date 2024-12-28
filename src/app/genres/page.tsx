import styles from './Genre.module.scss'
import {
    GenreTypesList,
    ImageGenre,
} from '@/components/CardButton/components/Genre/config'
import Link from 'next/link'
import { dynamicLinks } from '@/assets/routingLinks'

const Genre = () => {
    return (
        <div className={styles.genrePage}>
            {GenreTypesList.map((genreType) => {
                return (
                    <Link
                        href={dynamicLinks.genre(genreType)}
                        key={genreType}
                        className={styles.genreItem}
                    >
                        <div className={styles.imageSection}>
                            {ImageGenre(genreType)}
                        </div>
                        <p className={styles.genreTitle}>{genreType}</p>
                    </Link>
                )
            })}
        </div>
    )
}

export default Genre
