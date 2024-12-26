'use client'

import { FC, useRef } from 'react'
import clsx from 'clsx'

import { CardButton } from '@/components'

import { useScreenDetector } from '@/utils/hooks/useScreenDetector'

import { CardTypes } from '@/components/CardButton/types'

import ArrowIcon from '@/assets/icons/main/arrow.svg'

import styles from './Section-list.module.scss'
import { GenreTypesList } from '@/components/CardButton/components/Genre/config'

type TSectionProps = {
    title: string
    type: CardTypes
}

export const SectionList: FC<TSectionProps> = ({ title, type }) => {
    const listRef = useRef<HTMLDivElement>(null)
    const { width } = useScreenDetector()
    const hideMenus = width > 1900
    let isDown = false
    let startX: number
    let scrollLeft: number

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault()
        isDown = true
        startX = e.pageX - (listRef.current?.offsetLeft || 0)
        scrollLeft = listRef.current?.scrollLeft || 0
    }

    const handleMouseLeave = () => {
        isDown = false
    }

    const handleMouseUp = () => {
        isDown = false
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - (listRef.current?.offsetLeft || 0)
        const walk = (x - startX) * 1
        if (listRef.current) {
            listRef.current.scrollLeft = scrollLeft - walk
        }
    }

    const CardButtons = () => {
        switch (type) {
            case CardTypes.Genre:
                return GenreTypesList.map((genreType) => (
                    <CardButton
                        type={type}
                        genreType={genreType}
                        key={genreType}
                    />
                ))
            case CardTypes.Music:
                return (
                    <>
                        <CardButton type={type} />
                        <CardButton type={type} />
                        <CardButton type={type} />
                        <CardButton type={type} />
                        <CardButton type={type} />
                        <CardButton type={type} />
                        <CardButton type={type} />
                        <CardButton type={type} />
                        <CardButton type={type} />
                    </>
                )
        }
    }

    return (
        <div className={styles.section}>
            <div className={styles.titleSection}>
                <p className={styles.title}>{title}</p>
                <ArrowIcon />
            </div>
            <div
                className={clsx(styles.items, {
                    [styles.itemsWithoutMenu]: !hideMenus,
                })}
                ref={listRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {CardButtons()}
            </div>
        </div>
    )
}
