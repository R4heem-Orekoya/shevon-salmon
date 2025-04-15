import ShareButton from "@/components/share-button"
import { Button } from "@/components/ui/button"
import { tryCatch } from "@/lib/utils"
import { ArrowDownToLine, Forward } from "lucide-react"
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
         
         <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 max-w-5xl xl:max-w-6xl mx-auto pb-20">
            {images.map((image) => (
               <div className="relative col-span-1 mb-5 rounded-md overflow-hidden cursor-pointer group" key={image.id}>
                  <Image 
                     src={image.src.large} 
                     alt={image.alt} 
                     width={image.width} 
                     height={image.height} 
                     className="object-cover"
                     blurDataURL={image.src.tiny}
                  />
                  <div className="grid place-items-center absolute inset-0 bg-black/30 backdrop-blur-sm z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                     <h3 className="text-2xl text-white text-center font-mono_sans">{image.photographer}</h3>
                  
                     <div className="absolute bottom-0 right-0 flex items-center gap-4 p-4">
                        <button>
                           <ArrowDownToLine className="text-white w-5 h-5 hover:opacity-80 transition-opacity"/>
                        </button>
                        <ShareButton id={image.id}/>
                     </div>
                  </div>
               </div>   
            ))}
         </div>
         
         {/* <ShareDialog /> */}
      </main>
   )
}
