// import { NextRequest, NextResponse } from 'next/server'
//
// export function middleware(req: NextRequest) {
//     // const cookie = req.cookies.get('refreshToken')?.value
//     // const pathname = req.nextUrl.pathname
//     // const ignorePaths = ['/login', '/register', '/about']
//     // if (cookie === undefined && !ignorePaths.includes(pathname)) {
//     //     const url = req.nextUrl.clone()
//     //     url.pathname = '/login'
//     //     return NextResponse.redirect(new URL(url, req.url))
//     // } else if (
//     //     cookie !== undefined &&
//     //     (pathname === '/register' || pathname === '/login')
//     // ) {
//     //     const url = req.nextUrl.clone()
//     //     url.pathname = '/'
//     //     return NextResponse.redirect(new URL(url, req.url))
//     // }
// }

export function middleware() {}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}
