import { defineField, defineType } from "sanity";
import { VideoIcon } from '@sanity/icons'

export const ytVideos = defineType({
   name: "ytVideos",
   title: "Youtube Videos",
   type: "object",
   fields: [
      defineField({
         name: "heading",
         title: "Heading",
         type: "string",
         validation: Rule => Rule.required().error('Heading is required for YouTube section.'),
      }),
      defineField({
         name: "subHeading",
         title: "Sub Heading",
         type: "text",
         validation: Rule => Rule.max(300).warning('Subheading should not be too long.'),
      }),
      defineField({
         name: "videos",
         title: "Videos",
         type: "array",
         of: [
            defineField({
               name: "video",
               title: "Video",
               type: "object",
               icon: VideoIcon,
                  fields: [
                     defineField({
                        name: "videoId",
                        title: "Video Id",
                        type: "string",
                        validation: Rule => Rule.required().error('Video id is required.'),
                     }),
               ]
            })
         ],
         validation: Rule => Rule.required().min(1).error('At least one YouTube video is required.'),
      }),
   ],
})