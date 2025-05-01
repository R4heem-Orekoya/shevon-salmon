import VideoPlayer from "@/components/gallery-video-player";
import { HoverImageLinks } from "@/components/gears";
import { TextAnimate } from "@/components/text/animated";
import { GEARS_PAGE_QUERYResult } from "@/root/sanity.types";
import { sanityFetch } from "@/sanity/utils/live";
import { GEARS_PAGE_QUERY } from "@/sanity/utils/queries";

export default async function GearsPage() {
   const res = await sanityFetch({
      query: GEARS_PAGE_QUERY,
      tags: ["gearsPage"]
   })

   const data: GEARS_PAGE_QUERYResult[number] = res.data[0]

   return (
      <main className="w-[min(1200px,90%)] mx-auto">
         <div className="relative py-12 md:pb-16 md:pt-10 lg:py-20 flex flex-col items-center gap-3">
            <TextAnimate animation="blurInUp" as="h1" className="font-sora text-center font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl mx-auto">
               {data.heading ?? "Gears"}
            </TextAnimate>
            <TextAnimate as="p" className="sm:text-lg font-dm_sans text-muted-foreground max-w-sm text-center text-balance">
               {data.subHeading ?? "Everything I use to capture, create, and share high-quality visuals."}
            </TextAnimate>
         </div>

         <div className="max-w-4xl mx-auto mb-16">
            <HoverImageLinks gears={data.gears} />
         </div>

         {data.youtubeReferenceVideo && (
            <div className="max-w-4xl mx-auto">
               <TextAnimate animation="blurInUp" as="h2" className="font-sora font-semibold text-3xl sm:text-4xl py-8">
                  Video Reference
               </TextAnimate>

               <VideoPlayer url={data.youtubeReferenceVideo} />
            </div >
         )}
      </main>
   )
}