// import { NextRequest, NextResponse } from 'next/server'
//
// async function fetchUser(token: string) {
//     return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/profile`, {
//         headers: { Authorization: `Bearer ${token}` },
//     })
//         .then((res) => res.json())
//         .catch((err) => console.log(`Error: ${err.error} `))
// }
//
// export default async function middleware(req: NextRequest) {
//     const refreshToken = req.cookies.get('refresh')?.value
//
//     const response = await fetchUser(refreshToken || '')
//     if (!response) {
//         // new URL('/login', req.url).href
//         return NextResponse.redirect(new URL('/login', 'http://localhost:3000'))
//     }
// }

export default async function middleware() {}
