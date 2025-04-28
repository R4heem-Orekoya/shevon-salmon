import { defineField, defineType } from "sanity";

export const media = defineType({
   name: "media",
   title: "Media",
   type: "object",
   fields: [
      defineField({
         name: "title",
         title: "Title",
         type: "string",
         validation: (Rule) => Rule.required().min(2).max(100),
      }),
      defineField({
         name: "image",
         title: "Image",
         type: "image",
         validation: (Rule) => Rule.required(),
      }),
   ]
})