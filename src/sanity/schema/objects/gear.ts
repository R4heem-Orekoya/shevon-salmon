import { defineField, defineType } from "sanity";

export const gear = defineType({
   name: 'gear',
   title: 'Gear',
   type: 'object',
   fields: [
      defineField({
         name: "gear",
         title: "Name",
         type: "string",
         validation: (Rule) => Rule.required().min(2).max(100),
      }),
      defineField({
         name: "description",
         title: "Description",
         type: "text",
         validation: (Rule) => Rule.required().min(10).max(500),
      }),
      defineField({
         name: "affiliateLink",
         title: "Affiliate Link",
         type: "url",
         validation: (Rule) => 
            Rule.required().uri({
              scheme: ['https'],
            }),
      }),
      defineField({
         name: "image",
         title: "Image",
         type: "image",
         validation: (Rule) => Rule.required(),
      })
   ]
})