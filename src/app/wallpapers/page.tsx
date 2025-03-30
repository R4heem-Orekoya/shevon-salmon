import { Button } from "@/components/ui/button"
import { tryCatch } from "@/lib/utils"
import Image from "next/image"

interface image {
   id: number,
   width: number,
   height: number,
   url: string,
   photographer: string,
   photographer_url: string,
   photographer_id: number,
   avg_color: string,
   liked: boolean,
   src: {
      original: string,
      large: string,
      tiny: string,
      medium: string
   },
   alt: string 
}

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

const Page = async () => {
   const { data: images, error } = await tryCatch(fetchImages())
   
   if(error) {
      return <p>{error.message}</p>
   }
   
   return (
      <main className="w-[min(1200px,90%)] mx-auto">
         <section className="py-12 md:pb-16 md:pt-10 lg:py-32 flex flex-col md:items-center gap-6 md:gap-12">
            <h1 className="md:text-center font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto md:text-balance">
               Free High Resolution Wallpapers By Shevon
            </h1>
            <Button className="w-fit font-mono_sans" size="lg">Get Premium Wallpapers</Button>
         </section>
         
         <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-5 max-w-5xl xl:max-w-6xl mx-auto pb-20">
            {images.map((image) => (
               <div className="relative col-span-1 mb-5 rounded-xl overflow-hidden" key={image.id}>
                  <Image 
                     src={image.src.large} 
                     alt={image.alt} 
                     width={image.width} 
                     height={image.height} 
                     className="object-cover"
                     blurDataURL={image.src.tiny}
                  />
               </div>   
            ))}
         </div>
      </main>
   )
}

export default Page
