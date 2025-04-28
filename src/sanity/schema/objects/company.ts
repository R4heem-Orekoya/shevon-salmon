import { defineField, defineType } from "sanity";

export const company = defineType({
   name: "company",
   title: "Company",
   type: "object",
   fields: [
      defineField({
         name: "companyName",
         title: "Company Name",
         type: "string",
         validation: Rule => Rule.required().error('Company name is required.'),
      }),
      defineField({
         name: "companyLogo",
         title: "Company Logo",
         type: "image",
         validation: Rule => Rule.required().error('Company logo is required.'),
      }),
      defineField({
         name: "companyWebsiteLink",
         title: "Company Website Link",
         type: "url",
         validation: Rule => Rule
            .uri({
               scheme: ["https"],
            })
            .required()
            .error('A valid company website URL is required.'),
      }),
   ],
});
