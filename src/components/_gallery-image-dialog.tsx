"use client"

import { image } from "@/types"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { ArrowLeft, ArrowRight, X } from "lucide-react"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import SwiperCore from "swiper"
import "swiper/css"
import "swiper/css/thumbs"

interface ImageDialogProps {
   images: image[]
}

export default function ImageDialog({ images }: ImageDialogProps) {
   const [activeImage, setActiveImage] = useState<image | null>(null)

   return (
      <>
         <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-3 pb-12">
            {images.map((image) => (
               <Dialog key={image.id} onOpenChange={(open) => !open && setActiveImage(null)}>
                  <DialogTrigger asChild>
                     <div
                        onClick={() => setActiveImage(image)}
                        className="relative col-span-1 mb-3 rounded overflow-hidden cursor-pointer group"
                     >
                        <Image
                           alt={image.alt}
                           src={image.src.large}
                           className="w-full h-full"
                           width={image.width}
                           height={image.height}
                        />
                        <div className="absolute inset-0 p-4 flex items-end text-background backdrop-blur-sm bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                           <p className="mt-auto font-mono_sans font-medium text-xl">#{image.photographer}</p>
                        </div>
                     </div>
                  </DialogTrigger>

                  {activeImage && (
                     <DialogContent showCloseBtn={false} className="grid place-items-center max-w-screen h-screen bg-background sm:rounded-none border-none">
                        <div className="relative aspect-[9/16] sm:aspect-[3/2] max-h-full w-full max-w-5xl border overflow-hidden rounded-lg">
                           <DialogHeader className="flex flex-row items-center justify-between p-4 absolute top-0 z-20 w-full">
                              <DialogTitle></DialogTitle>
                              <DialogClose asChild>
                                 <Button size="icon" variant="outline" className="rounded-full">
                                    <X className="h-6 w-6 text-muted-foreground" />
                                 </Button>
                              </DialogClose>
                           </DialogHeader>

                           <ImageSlider images={images} selectedImage={activeImage} />
                        </div>
                     </DialogContent>
                  )}
               </Dialog>
            ))}
         </div>
      </>
   )
}


interface ImageSliderProps {
   images: image[]
   selectedImage: image
}

function ImageSlider({ images, selectedImage }: ImageSliderProps) {
   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)
   const swiperRef = useRef<SwiperCore | null>(null)

   return (
      <div className="w-full flex flex-col h-full justify-between py-4 space-y-6">
         {/* Main Image Swiper */}
         <Swiper
            modules={[Thumbs, FreeMode]}
            thumbs={{ swiper: thumbsSwiper }}
            slidesPerView={1}
            initialSlide={images.findIndex(img => img.id === selectedImage?.id)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="relative w-full h-[80%]"
         >
            {images.map((image) => (
               <SwiperSlide key={image.id}>
                  <Image
                     src={image.src.large}
                     alt={image.alt}
                     width={image.width}
                     height={image.height}
                     className="w-full h-full object-contain"
                     blurDataURL={image.src.tiny}
                  />
               </SwiperSlide>
            ))}
            <SliderControls />
         </Swiper>

         {/* Thumbnail Swiper */}
         <Swiper
            modules={[FreeMode, Thumbs]}
            onSwiper={setThumbsSwiper}
            freeMode={true}
            slidesPerView={6}
            spaceBetween={10}
            // watchSlidesProgress
            className="w-full h-20"
         >
            {images.map((image) => (
               <SwiperSlide
                  key={image.id}
                  className="cursor-zoom-in"
               >
                  <Image
                     src={image.src.medium}
                     alt={image.alt}
                     width={image.width}
                     height={image.height}
                     className="w-full h-full object-cover"
                     blurDataURL={image.src.tiny}
                  />

               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}

function SliderControls() {
   const swiper = useSwiper()
   const [isBeginning, setIsBeginning] = useState(true)
   const [isEnd, setIsEnd] = useState(false)

   useEffect(() => {
      const update = () => {
         setIsBeginning(swiper.isBeginning)
         setIsEnd(swiper.isEnd)
      }

      update()
      swiper.on("slideChange", update)

      return () => {
         swiper.off("slideChange", update)
      }
   }, [swiper])

   return (
      <div className="absolute top-1/2 -translate-y-1/2 z-20 w-full flex justify-between px-4">
         <Button
            onClick={() => swiper.slidePrev()}
            size="icon" variant="outline"
            className="rounded-full"
            disabled={isBeginning}
         >
            <ArrowLeft className="w-5 h-5 text-muted-foreground" />
         </Button>
         <Button
            onClick={() => swiper.slideNext()}
            size="icon" variant="outline"
            className="rounded-full"
            disabled={isEnd}
         >
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
         </Button>
      </div>
   )
}
