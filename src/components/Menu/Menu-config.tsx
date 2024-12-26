import { ReactNode } from 'react'

import { staticLinks } from '@/assets/routingLinks'

import HomeIcon from '@/assets/icons/menu/main/Home.svg'
import HomeSelected from '@/assets/icons/menu/main/Home-selected.svg'
import GenreIcon from '@/assets/icons/menu/main/Genre.svg'
import GenreSelected from '@/assets/icons/menu/main/Genre-selected.svg'
import ArtistsIcon from '@/assets/icons/menu/main/Artists.svg'
import ArtistsSelected from '@/assets/icons/menu/main/Artists-selected.svg'
import LikedIcon from '@/assets/icons/menu/library/Heart.svg'
import LikedSelected from '@/assets/icons/menu/library/Heart-selected.svg'
import RecentIcon from '@/assets/icons/menu/library/Recent.svg'
import RecentSelected from '@/assets/icons/menu/library/Recent-selected.svg'
import PlaylistIcon from '@/assets/icons/menu/playlist/Playlist.svg'
import PlaylistSelected from '@/assets/icons/menu/playlist/Playlist-selected.svg'

type TMenuItem = {
    titleItem: string
    icon: ReactNode
    iconSelected: ReactNode
    link: string
}

type TMenuConfig = {
    sectionTitle?: string
    items: TMenuItem[]
}

export const menuConfig: TMenuConfig[] = [
    {
        items: [
            {
                titleItem: 'Home',
                icon: <HomeIcon />,
                iconSelected: <HomeSelected />,
                link: staticLinks.main,
            },
            {
                titleItem: 'Genre',
                icon: <GenreIcon />,
                iconSelected: <GenreSelected />,
                link: staticLinks.genres,
            },
            {
                titleItem: 'Artists',
                icon: <ArtistsIcon />,
                iconSelected: <ArtistsSelected />,
                link: staticLinks.artists,
            },
        ],
    },
    {
        sectionTitle: 'LIBRARY',
        items: [
            {
                titleItem: 'Liked',
                icon: <LikedIcon />,
                iconSelected: <LikedSelected />,
                link: staticLinks.favourite,
            },
            {
                titleItem: 'Recently played',
                icon: <RecentIcon />,
                iconSelected: <RecentSelected />,
                link: staticLinks.recent,
            },
        ],
    },
    {
        sectionTitle: 'PLAYLIST',
        items: [
            {
                titleItem: 'My playlist #1',
                icon: <PlaylistIcon />,
                iconSelected: <PlaylistSelected />,
                link: staticLinks.playlist + '/1',
            },
        ],
    },
]
