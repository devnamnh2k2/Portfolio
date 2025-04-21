import createMiddleware from 'next-intl/middleware'
import { NextResponse, NextRequest } from 'next/server'

//config next-intl
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['vi', 'en', 'zh'],

  // Used when no locale matches
  defaultLocale: 'en'
})

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/en/home', request.url))
// }

export const config = {
  matcher: ['/', '/(vi|en|zh)/:path*']
}
