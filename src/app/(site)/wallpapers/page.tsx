import ImageGrid from "@/components/_wallpaper-image-dialog"
import SlideUp from "@/components/slide-up"
import { TextAnimate } from "@/components/text/animated"
import { buttonVariants } from "@/components/ui/button"
import { WALLPAPERS_PAGE_QUERYResult } from "@/root/sanity.types"
import { sanityFetch } from "@/sanity/utils/live"
import { WALLPAPERS_PAGE_QUERY } from "@/sanity/utils/queries"
import Link from "next/link"
import { Suspense } from "react"

export default async function Page() {
   const res = await sanityFetch({
      query: WALLPAPERS_PAGE_QUERY
   })
   
   const data: WALLPAPERS_PAGE_QUERYResult[number] = res.data[0]
   
   return (
      <main className="w-[min(1200px,90%)] mx-auto">
         <section className="py-12 md:pb-16 md:pt-10 lg:py-20 flex flex-col items-center gap-6 md:gap-12">
            <TextAnimate as="h1" animation="blurInUp" className="font-sora text-center font-medium sm:font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto md:text-balance">
               {data.heading ?? "Free High Resolution Wallpapers"}
            </TextAnimate>
            <SlideUp y={50}>
               <Link href={data.premiumLink ?? "https://shevonsalmon.gumroad.com/l/greatbundle?layout=profile"} className={buttonVariants({ className: "w-fit", size: "lg" })}>
                  Get Premium Wallpapers
               </Link>
            </SlideUp>
         </section>
         <Suspense>
            <ImageGrid wallpapers={data.wallpapers!}/>  
         </Suspense>
      </main>
   )
}
