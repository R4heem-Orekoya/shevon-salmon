import { type SchemaTypeDefinition } from 'sanity'

import { gearsPage } from "./documents/gears-page"
import { gear } from './objects/gear'
import { wallpapersPage } from './documents/wallpapers-page'
import { wallpaper } from './objects/wallpaper'
import { galleryPage } from './documents/gallery-page'
import { media } from './objects/media'
import { homePage } from './documents/home-page'
import { hero } from './objects/hero'
import { about } from './objects/about'
import { companies } from './objects/companies'
import { company } from './objects/company'
import { ytVideos } from './objects/yt-videos'
import { testimonials } from './objects/testimonials'
import { faqSection } from './objects/faq'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage, hero, about, companies, company, 
    galleryPage, media,
    wallpapersPage, wallpaper,
    gearsPage, gear,
    ytVideos, testimonials, faqSection
  ],
}