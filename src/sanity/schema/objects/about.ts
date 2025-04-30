import { defineField, defineType } from "sanity";

export const about = defineType({
   name: "about",
   title: "About",
   type: "object",
   fields: [
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
         name: "content",
         title: "About Content",
         type: "array",
         of: [
            {
               type: "block",
               styles: [
                  { title: "Normal", value: "normal" },
                  { title: "Quote", value: "blockquote" },
               ],
               lists: [],
               marks: {
                  decorators: [
                     { title: "Bold", value: "strong" },
                     { title: "Italic", value: "em" },
                     { title: "Underline", value: "underline" },
                  ],
                  annotations: [
                     {
                        name: "link",
                        type: "object",
                        title: "Link",
                        fields: [
                           {
                              name: "href",
                              type: "url",
                              title: "URL",
                              validation: Rule => Rule.uri({
                                 scheme: ["http", "https", "mailto", "tel"],
                              }),
                           },
                        ],
                     },
                  ],
               },
            },
         ],
         validation: Rule => Rule.required().error('About content is required.'),
      }),
      defineField({
         name: "image",
         title: "Image",
         type: "image",
         validation: Rule => Rule.required().error('Image is required.'),
      }),
   ],
});

