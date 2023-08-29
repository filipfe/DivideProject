import 'server-only'

export type Locale = 'pl' | 'en'

export type Dict = Awaited<ReturnType<typeof getDictionary>>;

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  pl: () => import('./pl.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: Locale) => dictionaries[locale]()