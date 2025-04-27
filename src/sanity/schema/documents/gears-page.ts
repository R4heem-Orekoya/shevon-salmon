import { defineField, defineType } from 'sanity'

export const gearsPage = defineType({
   name: 'gearsPage',
   title: 'Gears Page',
   type: 'document',
   fields: [
      defineField({
         name: 'heading',
         title: 'Page Heading',
         type: 'string',
         validation: (Rule) => Rule.required().min(3).max(100),
      }),
      defineField({
         name: 'subHeading',
         title: 'Page Sub Heading',
         type: 'text',
         validation: (Rule) => Rule.required().min(10).max(300),
      }),
      defineField({
         name: "gears",
         title: "Gears",
         type: "array",
         of: [{ type: 'gear' }],
         validation: (Rule) => Rule.required().min(1),
      }),
      defineField({
         name: "youtubeReferenceVideo",
         title: "YouTube Reference Video",
         type: "url",
         validation: (Rule) =>
            Rule.uri({
              scheme: ['https'],
            }),
      })
   ]
})