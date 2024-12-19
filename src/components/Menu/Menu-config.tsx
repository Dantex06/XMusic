import { ReactNode } from 'react'

import { staticLinks } from '@/assets/routingLinks'

import HomeIcon from '@/assets/icons/menu/main/Home.svg'
import GenreIcon from '@/assets/icons/menu/main/Genre.svg'
import ArtistsIcon from '@/assets/icons/menu/main/Artists.svg'
import LikedIcon from '@/assets/icons/menu/library/Heart.svg'
import RecentIcon from '@/assets/icons/menu/library/Recent.svg'
import CreatePlaylistIcon from '@/assets/icons/menu/playlist/Create.svg'
import PlaylistIcon from '@/assets/icons/menu/playlist/Playlist.svg'

type TMenuItem = {
    titleItem: string
    icon: ReactNode
    link?: string
}

type TMenuConfig = {
    sectionTitle: string
    items: TMenuItem[]
}

export const menuConfig: TMenuConfig[] = [
    {
        sectionTitle: 'Menu',
        items: [
            { titleItem: 'Home', icon: <HomeIcon />, link: staticLinks.main },
            {
                titleItem: 'Genre',
                icon: <GenreIcon />,
                link: staticLinks.genre,
            },
            {
                titleItem: 'Artists',
                icon: <ArtistsIcon />,
                link: staticLinks.artists,
            },
        ],
    },
    {
        sectionTitle: 'My library',
        items: [
            {
                titleItem: 'Liked',
                icon: <LikedIcon />,
                link: staticLinks.favourite,
            },
            {
                titleItem: 'Recent played',
                icon: <RecentIcon />,
                link: staticLinks.recent,
            },
        ],
    },
    {
        sectionTitle: 'Playlist',
        items: [
            { titleItem: 'Create playlist', icon: <CreatePlaylistIcon /> },
            {
                titleItem: 'My playlist #1',
                icon: <PlaylistIcon />,
                link: staticLinks.playlist + '/1',
            },
        ],
    },
]
