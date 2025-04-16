import ImageGrid from "@/components/image-dialog"
import { Button } from "@/components/ui/button"
import { tryCatch } from "@/lib/utils"
import { image } from "@/types"

async function fetchImages() {
   const res = await fetch(
      `https://api.pexels.com/v1/curated?per_page=60`,
      {
         headers: {
            Authorization: process.env.PEXELS_API_KEY!,
         },
      }
   )
   
   const response = await res.json()
   const images: image[] = response.photos
   
   return images
}

export default async function Page() {
   const { data: images, error } = await tryCatch(fetchImages())
   
   if(error) {
      return <p>{error.message}</p>
   }
   
   return (
      <main className="w-[min(1200px,90%)] mx-auto">
         <section className="py-12 md:pb-16 md:pt-10 lg:py-20 flex flex-col items-center gap-6 md:gap-12">
            <h1 className="text-center font-medium sm:font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl mx-auto md:text-balance">
               Free High Resolution Wallpapers
            </h1>
            <Button className="w-fit font-mono_sans" size="lg">Get Premium Wallpapers</Button>
         </section>
         
         <ImageGrid  images={images}/>  
      </main>
   )
}
