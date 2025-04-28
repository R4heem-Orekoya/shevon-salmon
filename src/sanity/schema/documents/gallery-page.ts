import { defineField, defineType } from "sanity";

export const galleryPage = defineType({
   name: "galleryPage",
   title: "Gallery Page",
   type: "document",
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
         name: "medias",
         title: "Medias",
         type: "array",
         of: [{ type: "media" }],
         validation: (Rule) => Rule.required().min(1),
      })
   ]
})