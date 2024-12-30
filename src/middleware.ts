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
