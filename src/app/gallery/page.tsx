import ImageDialog from "@/components/_gallery-image-dialog"
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
            <h1 className="font-mono_sans text-center font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl mx-auto">Gallery</h1>
            <p className="sm:text-lg font-poppins text-muted-foreground max-w-sm text-center">A curated look into my tech, lifestyle, setups,and moments.</p>
         </div>

         <ImageDialog images={images} />
      </main>
   )
}
