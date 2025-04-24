import ImageDialog from "@/components/_gallery-image-dialog"
import { TextAnimate } from "@/components/text/animated"
import { tryCatch } from "@/lib/utils"
import { image } from "@/types"

async function fetchImages() {
   const res = await fetch(
      `https://api.lummi.ai/v1/images/search?query=aesthetics`,
      {
         headers: {
            Authorization: `Bearer ${process.env.LUMNI_API_KEY}`,
         },
      }
   )

   const response = await res.json()
   const images: image[] = response.data

   return images
}


export default async function Page() {
   const { data: images, error } = await tryCatch(fetchImages())

   if (error) {
      return <p>{error.message}</p>
   }

   return (
      <main className="w-[min(1200px,90%)] mx-auto">
         <div className="relative py-12 md:pb-16 md:pt-10 lg:py-20 flex flex-col items-center gap-3">
            <TextAnimate as="h1" animation="blurInUp" className="font-sora text-center font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl mx-auto">Gallery</TextAnimate>
            <TextAnimate as="p" className="sm:text-lg font-dm_sans text-muted-foreground max-w-sm text-center">A curated look into my tech, lifestyle, setups,and moments.</TextAnimate>
         </div>

         <ImageDialog images={images!} />
      </main>
   )
}
