'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schema'
import { structure } from './src/sanity/structure'
import { imageAssetPickerPlugin } from 'sanity-plugin-image-asset-picker';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    imageAssetPickerPlugin(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
