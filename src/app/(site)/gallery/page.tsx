import ImageDialog from "@/components/_gallery-image-dialog"
import { TextAnimate } from "@/components/text/animated"
import { GALLERY_PAGE_QUERYResult } from "@/root/sanity.types"
import { sanityFetch } from "@/sanity/utils/live"
import { GALLERY_PAGE_QUERY } from "@/sanity/utils/queries"

export default async function Page() {
   const res = await sanityFetch({
      query: GALLERY_PAGE_QUERY
   })
   
   const data: GALLERY_PAGE_QUERYResult[number] = res.data[0]
   
   return (
      <main className="w-[min(1200px,90%)] mx-auto">
         <div className="relative py-12 md:pb-16 md:pt-10 lg:py-20 flex flex-col items-center gap-3">
            <TextAnimate as="h1" animation="blurInUp" className="font-sora text-center font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl mx-auto">
               {data.heading ?? "Gallery"}
            </TextAnimate>
            <TextAnimate as="p" className="sm:text-lg font-dm_sans text-muted-foreground max-w-sm text-center">
               {data.subHeading ?? "A curated look into my tech, lifestyle, setups,and moments."}
            </TextAnimate>
         </div>

         <ImageDialog medias={data.medias!} />
      </main>
   )
}
