"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { ArrowLeft, ArrowRight, X } from "lucide-react"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { FreeMode, Thumbs } from 'swiper/modules';
import SwiperCore from "swiper"
import "swiper/css"
import "swiper/css/thumbs"
import { motion } from "motion/react"
import { GALLERY_PAGE_QUERYResult } from "@/root/sanity.types"
import { urlFor } from "@/sanity/utils/image"

type media = NonNullable<GALLERY_PAGE_QUERYResult[number]["medias"]>[number]

interface ImageDialogProps {
   medias: media[]
}

export default function ImageDialog({ medias }: ImageDialogProps) {
   const [activeImage, setActiveImage] = useState<media | null>(null)

   return (
      <>
         <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-3 pb-12">

            {medias.map((media, i) => (
               <Dialog key={media._key} onOpenChange={(open) => !open && setActiveImage(null)}>
                  <DialogTrigger asChild>
                     <motion.div
                        onClick={() => setActiveImage(media)}
                        style={{
                           backgroundColor: media.image?.asset?.metadata?.palette?.dominant?.background,
                           aspectRatio: media.image?.asset?.metadata?.dimensions?.aspectRatio
                        }}
                        initial={{
                           opacity: 0, scale: 0.8,
                           filter: 'blur(7px)'
                        }}
                        whileInView={{
                           opacity: 1,
                           scale: 1,
                           filter: 'blur(0px)',
                        }}
                        transition={{
                           duration: 0.5,
                           delay: 0.125
                        }}
                        viewport={{
                           once: true
                        }}
                        className="relative col-span-1 mb-3 rounded overflow-hidden cursor-pointer group"
                     >
                        <Image
                           alt={`This is an image in shevon gallery`}
                           src={urlFor(media.image?.asset?.url!).width(800).quality(75).format('webp').url()}
                           className="w-full h-full"
                           fill
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                           loading="lazy"
                           placeholder="blur"
                           blurDataURL={media.image?.asset?.metadata?.lqip!}
                        />
                        <div className="absolute inset-0 p-4 flex items-end text-background backdrop-blur-sm bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                           <p className="mt-auto font-sora font-medium text-xl">#{media.title}</p>
                        </div>
                     </motion.div>
                  </DialogTrigger>

                  {activeImage && (
                     <DialogContent showCloseButton={false} className="grid place-items-center max-w-screen h-screen bg-background sm:rounded-none border-none">
                        <div className="relative aspect-[9/16] sm:aspect-[3/2] max-h-full w-full max-w-5xl border overflow-hidden rounded-lg">
                           <DialogHeader className="flex flex-row items-center justify-between p-4 absolute top-0 z-20 w-full">
                              <DialogTitle></DialogTitle>
                              <DialogClose asChild>
                                 <Button size="icon" variant="outline" className="rounded-full">
                                    <X className="h-6 w-6 text-muted-foreground" />
                                 </Button>
                              </DialogClose>
                           </DialogHeader>

                           <ImageSlider images={medias} selectedImage={activeImage} />
                        </div>
                     </DialogContent>
                  )}
               </Dialog>
            ))}
         </div >
      </>
   )
}

interface ImageSliderProps {
   images: media[]
   selectedImage: media
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
            initialSlide={images.findIndex(img => img._key === selectedImage?._key)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="relative w-full h-[80%]"
         >
            {images.map((media) => (
               <SwiperSlide key={media._key} style={{
                  aspectRatio: media.image?.asset?.metadata?.dimensions?.aspectRatio
               }}>
                  <Image
                     alt={`This is an image in shevon gallery`}
                     src={urlFor(media.image?.asset?.url!).quality(100).format('webp').url()}
                     quality={100}
                     className="h-full object-contain"
                     fill
                     sizes="(max-width: 768px) 90vw, 80vw"
                     loading="lazy"
                     placeholder="blur"
                     blurDataURL={media.image?.asset?.metadata?.lqip!}
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
            slidesPerView={3}
            spaceBetween={10}
            breakpoints={{
               640: { slidesPerView: 4 },
               768: { slidesPerView: 4 },
               1024: { slidesPerView: 6 },
            }}
            className="w-full h-16 sm:h-20"
         >
            {images.map((media) => (
               <SwiperSlide
                  key={media._key}
                  className="cursor-zoom-in"
               >
                  <Image
                     alt={"This is an image in shevon gallery"}
                     src={urlFor(media.image?.asset?.url!).width(600).quality(65).format('webp').url()}
                     className="w-full h-full object-cover"
                     fill
                     sizes="(max-width: 768px) 20vw, (max-width: 1200px) 10vw, 100px"
                     loading="lazy"
                     placeholder="blur"
                     blurDataURL={media.image?.asset?.metadata?.lqip!}
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
