import { defineField, defineType } from "sanity";
import { MessageCircleQuestion } from 'lucide-react';

export const faqSection = defineType({
   name: "faqSection",
   title: "FAQ Section",
   type: "object",
   fields: [
      defineField({
         name: "heading",
         title: "Heading",
         type: "string",
         validation: Rule => Rule.required().error('Heading is required for FAQ section.'),
      }),
      defineField({
         name: "subHeading",
         title: "Sub Heading",
         type: "text",
         validation: Rule => Rule.max(300).warning('Subheading should not be too long.'),
      }),
      defineField({
         name: "faqs",
         title: "FAQs",
         type: "array",
         of: [
            defineField({
               name: "faq",
               title: "FAQ",
               type: "object",
               icon: MessageCircleQuestion,
               fields: [
                  defineField({
                     name: "question",
                     title: "Question",
                     type: "text",
                     validation: Rule => Rule.required().error('FAQ question is required.'),
                  }),
                  defineField({
                     name: "answer",
                     title: "Answer",
                     type: "array",
                     of: [
                        {
                           type: "block",
                           styles: [],
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
                                       },
                                    ],
                                 },
                              ],
                           },
                        },
                     ],
                     validation: Rule => Rule.required().error('FAQ answer is required.'),
                  }),
               ]
            })
         ],
         validation: Rule => Rule.required().min(1).error('At least one FAQ is required.'),
      }),
   ],
});
