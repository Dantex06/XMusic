import { FC } from 'react'

import { MusicItem } from '@/components/CardButton/components/Music'
import { GenreItem } from '@/components/CardButton/components/Genre'

import { CardTypes, GenreTypes } from '@/components/CardButton/types'

type TCardButtonProps = {
    type: CardTypes
    genreType?: GenreTypes
}

export const CardButton: FC<TCardButtonProps> = ({ type, genreType }) => {
    switch (type) {
        case 'Music':
            return <MusicItem />

        case 'Genre': {
            if (genreType) return <GenreItem genreType={genreType} />
        }
    }
}
