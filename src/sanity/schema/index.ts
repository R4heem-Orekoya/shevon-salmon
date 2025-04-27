import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { gearsPage } from "./documents/gears-page"
import { gear } from './objects/gear'
import { wallpapersPage } from './documents/wallpapers-page'
import { wallpaper } from './objects/wallpaper'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType, categoryType, 
    postType, authorType, gearsPage, gear,
    wallpapersPage, wallpaper
  ],
}