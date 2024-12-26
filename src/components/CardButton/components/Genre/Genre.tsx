'use client'

import { FC, useRef, useState } from 'react'

import { ImageGenre } from '@/components/CardButton/components/Genre/config'
import { GenreTypes } from '@/components/CardButton/types'

import { dynamicLinks } from '@/assets/routingLinks'

import PlayIcon from '@/assets/icons/main/play.svg'

import styles from './Genre.module.scss'
import { useRouter } from 'next/navigation'

type TGenreItemProps = {
    genreType: GenreTypes
}

export const GenreItem: FC<TGenreItemProps> = ({ genreType }) => {
    const genreRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const router = useRouter()

    const handleMouseDown = () => {
        setIsDragging(false) // Начинаем с false
    }

    const handleMouseUp = () => {
        if (!isDragging) {
            router.push(dynamicLinks.genre(genreType))
        }
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        // e.buttons === 1 - проверка на нажатие левой кнопки мыши
        if (e.buttons === 1) {
            setIsDragging(true)
        }
    }

    return (
        <div
            ref={genreRef}
            className={styles.card}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <div className={styles.imageSection}>{ImageGenre(genreType)}</div>
            <div className={styles.playIcon}>
                <PlayIcon />
            </div>
            <div className={styles.infoSection}>
                <p className={styles.title}>{genreType}</p>
            </div>
        </div>
    )
}
