import { NextRequest, NextResponse } from 'next/server'
import Negotiator from 'negotiator'
import { match as matchLocale } from '@formatjs/intl-localematcher'

const omittedPaths = ['sitemap.xml', 'robots.txt', 'opengraph-image.png', 'twitter-image.png', 'favicon.ico']
const locales = ['en', 'pl']
const defaultLocale = 'en'

type Headers = {
  [key: string]: string;
}

function getLocale(req: NextRequest) {
  const headers: Headers = {}
  req.headers.forEach((value, key) => (headers[key] = value))
  const languages = new Negotiator({ headers }).languages()
  const locale = matchLocale(languages, locales, defaultLocale);
  return locale
}

export async function middleware(req: NextRequest) {
  const {pathname} = req.nextUrl
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  ) && omittedPaths.every(path => !pathname.startsWith(`/${path}/`) && pathname !== `/${path}`)
 
  if (pathnameIsMissingLocale) {
    const locale = getLocale(req)
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, req.url)
    )
  }
}

export const config = {
  matcher: ['/((?!_next).*)'],
}