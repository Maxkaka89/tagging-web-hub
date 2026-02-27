import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Array of paths that don't require authentication
const publicPaths = ['/login', '/signup', '/forgot-password', '/api/auth', '/favicon.ico']

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Allow static assets, API routes, and Next.js internals to bypass auth
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.match(/\.(png|jpg|jpeg|gif|svg|ico)$/i)
    ) {
        return NextResponse.next()
    }

    // Check if the current path is public (like /login)
    const isPublicPath = publicPaths.some(path => pathname.startsWith(path))

    // Get the auth cookie we set during login
    const hasAuth = request.cookies.has('hub-auth')

    // If user is trying to access a protected route without auth, redirect to login
    if (!isPublicPath && !hasAuth) {
        const loginUrl = new URL('/login', request.url)
        return NextResponse.redirect(loginUrl)
    }

    // If user is already logged in and tries to access /login, redirect to dashboard
    if (pathname === '/login' && hasAuth) {
        const dashboardUrl = new URL('/', request.url)
        return NextResponse.redirect(dashboardUrl)
    }

    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
