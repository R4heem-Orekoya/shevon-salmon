import { defineField, defineType } from "sanity";

export const companies = defineType({
   name: "companies",
   title: "Companies",
   type: "object",
   fields: [
      defineField({
         name: "heading",
         title: "Heading",
         type: "string",
         validation: Rule => Rule.required().error('Heading is required.'),
      }),
      defineField({
         name: "companiesList",
         title: "Companies",
         type: "array",
         of: [{ type: "company" }],
         validation: Rule => Rule.required().min(1).error('At least one company is required.'),
      }),
   ],
});
