import { GenreTypes } from '@/components/CardButton/types'

export type linkType = keyof typeof staticLinks

export const staticLinks = {
    main: '/',
    register: '/register',
    login: '/login',
    genres: '/genres',
    artists: '/artists',
    favourite: '/favourite',
    playlist: '/playlist',
    recent: '/recently',
    profile: '/profile/me',
    profileSettings: '/profile/me?tab=settings',
    profileFriends: '/profile/me?tab=friends',
}

export const dynamicLinks = {
    genre: (genre: GenreTypes) => `${staticLinks.genres}/${genre}`,
}
