import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { gearsPage } from "./documents/gears-page"
import { gear } from './objects/gear'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType, categoryType, 
    postType, authorType, gearsPage, gear
  ],
}