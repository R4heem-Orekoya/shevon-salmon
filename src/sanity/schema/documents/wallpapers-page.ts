import { defineField, defineType } from 'sanity'

export const wallpapersPage = defineType({
   name: 'wallpapersPage',
   title: 'Wallpaper Page',
   type: 'document',
   fields: [
      defineField({
         name: 'heading',
         title: 'Page Heading',
         type: 'string',
         validation: (Rule) => Rule.required().min(3).max(100),
      }),
      defineField({
         name: 'premiumLink',
         title: 'Premium Wallpapers Link',
         type: 'url',
         validation: (Rule) =>
            Rule.uri({
              scheme: ['https'],
            }),
      }),
      defineField({
         name: "wallpapers",
         title: "Wallpapers",
         type: "array",
         of: [{ type: 'wallpaper' }],
         validation: (Rule) => Rule.required().min(1),
      })
   ]
})