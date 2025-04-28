import { defineField, defineType } from "sanity";
import { CommentIcon } from '@sanity/icons'

export const testimonials = defineType({
   name: "testimonialsSection",
   title: "Testimonials Section",
   type: "object",
   fields: [
      defineField({
         name: "heading",
         title: "Heading",
         type: "string",
         validation: Rule => Rule.required().error('Heading is required for Testimonials section.'),
      }),
      defineField({
         name: "subHeading",
         title: "Sub Heading",
         type: "text",
         validation: Rule => Rule.max(300).warning('Subheading should not be too long.'),
      }),
      defineField({
         name: "testimonials",
         title: "Testimonials",
         type: "array",
         of: [
            defineField({
               name: "testimonial",
               title: "Testimonial",
               type: "object",
               icon: CommentIcon,
               fields: [
                  defineField({
                     name: "author",
                     title: "Author",
                     type: "string",
                     validation: Rule => Rule.required().error('Author name is required.'),
                  }),
                  defineField({
                     name: "quote",
                     title: "Quote",
                     type: "text",
                     validation: Rule => Rule.required().error('Testimonial quote is required.'),
                  }),
               ]
            })
         ],
         validation: Rule => Rule.required().min(1).error('At least one testimonial is required.'),
      }),
   ],
});
