import Image from 'next/image'

import { GenreTypes } from '@/components/CardButton/types'

import ExampleMusic from '@/assets/images/examples/MusicCard-example.png'

import styles from './Genre.module.scss'
import { FC } from 'react'
import { ImageGenre } from '@/components/CardButton/components/Genre/config'

type TGenreItemProps = {
    genreType: GenreTypes
}

export const GenreItem: FC<TGenreItemProps> = ({ genreType }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageSection}>{ImageGenre(genreType)}</div>
            <div className={styles.infoSection}>
                <p className={styles.title}>{genreType}</p>
            </div>
        </div>
    )
}
