"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import Image from "next/image"
import { ArrowDownToLine, ArrowLeft, ArrowRight, ExternalLink, Forward, X } from "lucide-react"
import ShareButton from "./share-button"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { Button } from "./ui/button"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore from "swiper"
import 'swiper/css';
import { motion } from "motion/react"
import { WALLPAPERS_PAGE_QUERYResult } from "@/root/sanity.types"
import { urlFor } from "@/sanity/utils/image"

type wallpaper = NonNullable<WALLPAPERS_PAGE_QUERYResult[number]["wallpapers"]>[number]

interface ImageGridProps {
   wallpapers: wallpaper[]
}

export default function ImageGrid({ wallpapers }: ImageGridProps) {
   const router = useRouter()
   const searchParams = useSearchParams()
   const id = searchParams.get("id")

   const [selectedImage, setSelectedImage] = useState<wallpaper | null>(null)

   useEffect(() => {
      if (id) {
         const match = wallpapers?.find((wallpaper) => wallpaper._key === id)
         setSelectedImage(match || null)
      } else {
         setSelectedImage(null)
      }
   }, [id, wallpapers])

   const handleImageClick = (image: wallpaper) => {
      setSelectedImage(image)
      router.push(`/wallpapers?id=${image._key}`, { scroll: false })
   }

   const handleClose = () => {
      setSelectedImage(null)
      router.push("/wallpapers", { scroll: false })
   }

   return (
      <>
         <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 max-w-5xl xl:max-w-6xl mx-auto pb-20">
            {wallpapers.map((wallpaper) => (
               <ImageItem
                  wallpaper={wallpaper}
                  key={wallpaper._key}
                  onClick={() => handleImageClick(wallpaper)}
               />
            ))}
         </div>

         {selectedImage && (
            <Dialog open onOpenChange={(open) => {
               if (!open) handleClose()
            }}>
               <DialogContent showCloseButton={false} className="grid place-items-center max-w-screen h-screen bg-background sm:rounded-none border-none">
                  <div className="relative aspect-[9/16] sm:aspect-[3/2] max-h-full w-full max-w-5xl border overflow-hidden rounded-lg">
                     <DialogHeader className="flex flex-row items-center justify-between p-4 absolute top-0 z-20 w-full">
                        <DialogTitle hidden></DialogTitle>
                        <div className="flex items-center gap-3">
                           <Button size="icon" variant="outline" className="rounded-full">
                              <ExternalLink className="h-6 w-6 text-muted-foreground" />
                           </Button>
                           <Button size="icon" variant="outline" className="rounded-full">
                              <ArrowDownToLine className="h-6 w-6 text-muted-foreground" />
                           </Button>
                           <ShareButton
                              id={selectedImage._key}
                              triggerComponent={
                                 <Button
                                    size="icon" variant="outline"
                                    className="rounded-full"
                                    onClick={(e) => {
                                       e.stopPropagation()
                                    }}
                                 >
                                    <Forward className="text-muted-foreground w-5 h-5" />
                                 </Button>
                              }
                           />
                        </div>
                        <DialogClose asChild>
                           <Button size="icon" variant="outline" className="rounded-full">
                              <X className="h-6 w-6 text-muted-foreground" />
                           </Button>
                        </DialogClose>
                     </DialogHeader>

                     <ImageSlider
                        wallpapers={wallpapers}
                        selectedImage={selectedImage}
                        setSelectedImage={setSelectedImage}
                     />
                  </div>
               </DialogContent>
            </Dialog>
         )}
      </>
   )
}

interface ImageSliderProps {
   wallpapers: wallpaper[]
   selectedImage: wallpaper
   setSelectedImage: Dispatch<SetStateAction<wallpaper | null>>
}

function ImageSlider({ wallpapers, selectedImage, setSelectedImage }: ImageSliderProps) {
   const swiperRef = useRef<SwiperCore | null>(null)
   const router = useRouter()

   const handleSlideChange = () => {
      const swiper = swiperRef.current
      if (!swiper) return

      const currentIndex = swiper.activeIndex
      const currentImage = wallpapers[currentIndex]
      if (currentImage && currentImage._key !== selectedImage?._key) {
         setSelectedImage(currentImage)
         router.push(`/wallpapers?id=${currentImage._key}`, { scroll: false })
      }
   }

   return (
      <Swiper
         slidesPerView={1}
         className="relative w-full h-full"
         initialSlide={wallpapers.findIndex(wallpaper => wallpaper._key === selectedImage?._key)}
         onSwiper={(swiper) => (swiperRef.current = swiper)}
         onSlideChange={handleSlideChange}
      >
         {wallpapers.map((wallpaper) => (
            <SwiperSlide className="w-full h-full" key={wallpaper._key}>
               <Image
                  src={urlFor(wallpaper.image?.asset?.url!).quality(100).url()}
                  alt={`Wallpaper image with title ${wallpaper.wallpaper}`}
                  width={wallpaper.image?.asset?.metadata?.dimensions?.width}
                  height={wallpaper.image?.asset?.metadata?.dimensions?.height}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={wallpaper.image?.asset?.metadata?.lqip!}
               />
            </SwiperSlide>
         ))}
         <SliderControls />
      </Swiper>
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

function ImageItem({ wallpaper, onClick }: { wallpaper: wallpaper, onClick?: () => void }) {
   return (
      <motion.div
         onClick={onClick}
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
         className="relative col-span-1 mb-5 rounded-md overflow-hidden cursor-pointer group"
      >
         <Image
            src={urlFor(wallpaper.image?.asset?.url!).quality(100).url()}
            alt={`Wallpaper with title ${wallpaper.wallpaper}`}
            width={wallpaper.image?.asset?.metadata?.dimensions?.width}
            height={wallpaper.image?.asset?.metadata?.dimensions?.height}
            className="object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL={wallpaper.image?.asset?.metadata?.lqip!}
         />
         <div className="grid place-items-center absolute inset-0 bg-black/30 backdrop-blur-sm z-20 opacity-0 group-hover:opacity-100 transition-opacity">
            <h3 className="text-2xl text-white text-center font-sora">{wallpaper.wallpaper}</h3>

            <div className="absolute bottom-0 right-0 flex items-center gap-4 p-4">
               <button>
                  <ArrowDownToLine className="text-white w-5 h-5 hover:opacity-80 transition-opacity" />
               </button>
               <ShareButton
                  id={wallpaper._key}
                  triggerComponent={
                     <button
                        onClick={(e) => {
                           e.stopPropagation()
                        }}
                     >
                        <Forward className="text-white w-5 h-5 hover:opacity-80 transition-opacity" />
                     </button>
                  }
               />
            </div>
         </div>
      </motion.div>
   )
}