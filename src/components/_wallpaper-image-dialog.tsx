"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { image } from "@/types"
import Image from "next/image"
import { ArrowDownToLine, ArrowLeft, ArrowRight, ExternalLink, Forward, X } from "lucide-react"
import ShareButton from "./share-button"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { Button } from "./ui/button"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore from "swiper"
import 'swiper/css';


export default function ImageGrid({ images }: { images: image[] }) {
   const router = useRouter()
   const searchParams = useSearchParams()
   const id = searchParams.get("id")

   const [selectedImage, setSelectedImage] = useState<image | null>(null)

   useEffect(() => {
      if (id) {
         const match = images.find((img) => img.id === id)
         setSelectedImage(match || null)
      } else {
         setSelectedImage(null)
      }
   }, [id, images])

   const handleImageClick = (image: image) => {
      setSelectedImage(image)
      router.push(`/wallpapers?id=${image.id}`, { scroll: false })
   }

   const handleClose = () => {
      setSelectedImage(null)
      router.push("/wallpapers", { scroll: false })
   }

   return (
      <>
         <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 max-w-5xl xl:max-w-6xl mx-auto pb-20">
            {images.map((image) => (
               <ImageItem
                  image={image}
                  key={image.id}
                  onClick={() => handleImageClick(image)}
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
                              id={selectedImage.id}
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
                        images={images}
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
   images: image[]
   selectedImage: image
   setSelectedImage: Dispatch<SetStateAction<image | null>>
}

function ImageSlider({ images, selectedImage, setSelectedImage }: ImageSliderProps) {
   const swiperRef = useRef<SwiperCore | null>(null)
   const router = useRouter()

   const handleSlideChange = () => {
      const swiper = swiperRef.current
      if (!swiper) return

      const currentIndex = swiper.activeIndex
      const currentImage = images[currentIndex]
      if (currentImage && currentImage.id !== selectedImage?.id) {
         setSelectedImage(currentImage)
         router.push(`/wallpapers?id=${currentImage.id}`, { scroll: false })
      }
   }

   return (
      <Swiper
         slidesPerView={1}
         className="relative w-full h-full"
         initialSlide={images.findIndex(img => img.id === selectedImage?.id)}
         onSwiper={(swiper) => (swiperRef.current = swiper)}
         onSlideChange={handleSlideChange}
      >
         {images.map((image) => (
            <SwiperSlide className="w-full h-full" key={image.id}>
               <Image
                  src={image.url}
                  alt={image.description}
                  width={image.width}
                  height={image.height}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  priority={false}
                  unoptimized
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

function ImageItem({ image, onClick }: { image: image, onClick?: () => void }) {
   return (
      <div
         onClick={onClick}
         style={{
            aspectRatio: image.aspectRatio,
            backgroundColor: image.colorPalette[0].hex
         }} 
         className="relative col-span-1 mb-5 rounded-md overflow-hidden cursor-pointer group"
      >
         <Image
            src={image.url}
            alt={image.description}
            width={image.width}
            height={image.height}
            className="object-cover"
            loading="lazy"
            priority={false}
            unoptimized
         />
         <div className="grid place-items-center absolute inset-0 bg-black/30 backdrop-blur-sm z-20 opacity-0 group-hover:opacity-100 transition-opacity">
            <h3 className="text-2xl text-white text-center font-mono_sans">{image.author.name}</h3>

            <div className="absolute bottom-0 right-0 flex items-center gap-4 p-4">
               <button>
                  <ArrowDownToLine className="text-white w-5 h-5 hover:opacity-80 transition-opacity" />
               </button>
               <ShareButton
                  id={image.id}
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
      </div>
   )
}