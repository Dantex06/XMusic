// import { NextRequest, NextResponse } from 'next/server'
//
// async function fetchUser(token: string) {
//     return fetch(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/api/v1/users/me`,
//         {
//             headers: { Authorization: `Bearer ${token}` },
//         }
//     )
//         .then((res) => res.json())
//         .catch((err) => console.log(`Error: ${err.error} `))
// }
//
// export default async function middleware(req: NextRequest) {
//     const refreshToken = req.cookies.get('refreshToken')?.value
//
//     const response = await fetchUser(refreshToken || '')
//     if (!response) {
//         // new URL('/login', req.url).href
//         return NextResponse.redirect(new URL('/login', 'http://localhost:3000'))
//     }
// }

import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
    const cookie = req.cookies.get('refreshToken')?.value
    if (cookie === undefined) {
        const url = req.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.redirect(new URL(url, req.url))
    }
}

export const config = {
    matcher: ['/((?!_next/static|favicon.ico|login|).*)'],
}
// export default async function middleware() {}
