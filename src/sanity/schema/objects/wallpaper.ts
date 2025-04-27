import { defineField, defineType } from "sanity";

export const wallpaper = defineType({
   name: 'wallpaper',
   title: 'Wallpaper',
   type: 'object',
   fields: [
      defineField({
         name: "wallpaper",
         title: "Name",
         type: "string",
         validation: (Rule) => Rule.required().min(2).max(100),
      }),
      defineField({
         name: "image",
         title: "Image",
         type: "image",
         validation: (Rule) => Rule.required(),
      })
   ]
})