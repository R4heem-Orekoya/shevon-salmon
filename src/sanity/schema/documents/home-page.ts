import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const homePage = defineType({
   name: "homePage",
   title: "Home Page",
   type: "document",
   icon: HomeIcon,
   fields: [
      defineField({
         name: "heading",
         title: "Heading",
         type: "string"
      }),
      defineField({
         name: "heroSection",
         title: "Hero Section",
         type: "hero"
      }),
      defineField({
         name: "aboutSection",
         title: "About Section",
         type: "about"
      }),
      defineField({
         name: "companiesSection",
         title: "Companies Section",
         type: "companies"
      }),
      defineField({
         name: "ytVideosSection",
         title: "Youtube Videos Section",
         type: "ytVideos"
      }),
      defineField({
         name: "testimonialsSection",
         title: "Testimonials Section",
         type: "testimonialsSection",
         validation: Rule => Rule.required().error('Testimonials section is required.'),
      }),
      defineField({
         name: "faqSection",
         title: "FAQ Section",
         type: "faqSection",
         validation: Rule => Rule.required().error('FAQ section is required.'),
       }),
   ]
})