export type TRouteConfig = {
    title: string
    link: string
}

export const routeConfig = (routes: string): TRouteConfig[] => {
    const route = {
        '': 'Home',
        genre: 'Genre',
        artist: 'Artist',
        favorite: 'Favorite',
        recently: 'Recently',
        playlist: 'Playlist',
    }
    console.log(routes)

    return routes
        .split('/')
        .slice(1)
        .map((value) => {
            if (value in route) {
                console.log({
                    title: route[value as keyof typeof route],
                    link: `${routes.slice(0, routes.indexOf(value)) + value}`,
                })
                return {
                    title: route[value as keyof typeof route],
                    link: `${routes.slice(0, routes.indexOf(value)) + value}`,
                }
            } else {
                console.log({
                    title: value.charAt(0).toUpperCase() + value.slice(1),
                    link: `${routes.slice(0, routes.indexOf(value)) + value}`,
                })
                return {
                    title: value.charAt(0).toUpperCase() + value.slice(1),
                    link: `${routes.slice(0, routes.indexOf(value)) + value}`,
                }
            }
        })
}
