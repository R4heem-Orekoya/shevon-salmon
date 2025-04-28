import { defineField, defineType } from "sanity";

export const hero = defineType({
   name: "hero",
   title: "Hero Section",
   type: "object",
   fields: [
      defineField({
         name: "portrait",
         title: "Portrait Image",
         type: "image",
         validation: Rule => Rule.required().error('Portrait image is required.'),
      }),
      defineField({
         name: "heading",
         title: "Heading",
         type: "string",
         validation: Rule => Rule.required().error('Heading is required.'),
      }),
      defineField({
         name: "subHeading",
         title: "Sub Heading",
         type: "text",
         validation: Rule => Rule.max(300).warning('Subheading should not be too long.'),
      }),
      defineField({
         name: "bottomImages",
         title: "Bottom Images",
         type: "array",
         of: [{ type: "image" }],
         validation: Rule => Rule.required().max(3).error('You can upload a maximum of 3 images.'),
      }),
      defineField({
         name: "digitalProductLinks",
         title: "Digital Product Link",
         type: "url",
         validation: Rule => Rule.required().uri({ scheme: ['https'] }).error('A valid HTTPS link is required.'),
      }),
   ],
})
