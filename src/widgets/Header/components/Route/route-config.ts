export const routeConfig = (routes: string) => {
    const route = {
        '': 'Home',
        genre: 'Genre',
        artist: 'Artist',
        favorite: 'Favorite',
        recently: 'Recently',
        playlist: 'Playlist',
    }

    return routes
        .split('/')
        .slice(1)
        .map((value) => {
            if (value in route) {
                return {
                    title: route[value as keyof typeof route],
                    link: `${routes.slice(0, routes.indexOf(value)) + value}`,
                }
            } else {
                return {
                    title: value.charAt(0).toUpperCase() + value.slice(1),
                    link: `${routes.slice(0, routes.indexOf(value)) + value}`,
                }
            }
        })
}