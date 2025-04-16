"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { image } from "@/types"
import Image from "next/image"
import { ArrowDownToLine, X } from "lucide-react"
import ShareButton from "./share-button"
import { useEffect, useState } from "react"


export default function ImageGrid({ images }: { images: image[] }) {
   const router = useRouter()
   const searchParams = useSearchParams()
   const id = searchParams.get("id") ? Number(searchParams.get("id")) : null

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
                  quality="large"
                  image={image}
                  key={image.id}
                  onClick={() => handleImageClick(image)}
               />
            ))}
         </div>

         {!selectedImage && (
            <Dialog  open onOpenChange={(open) => {
               if (!open) handleClose()
            }}>
               <DialogContent showCloseBtn={false} className="max-w-screen h-screen bg-background sm:rounded-none border-none">
                  <CloseDialog />
                  <DialogHeader>
                     <DialogTitle></DialogTitle>
                  </DialogHeader>
                  {/* <ImageItem image={selectedImage} quality="original"/> */}
               </DialogContent>
            </Dialog>
         )}
      </>
   )
}


type quality = keyof image["src"]

function ImageItem({ image, onClick, quality }: { image: image, onClick?: () => void, quality: quality }) {
   return (
      <div
         onClick={onClick}
         className="relative col-span-1 mb-5 rounded-md overflow-hidden cursor-pointer group"
      >
         <Image
            src={image.src[quality]}
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
                  <ArrowDownToLine className="text-white w-5 h-5 hover:opacity-80 transition-opacity" />
               </button>
               <ShareButton id={image.id} />
            </div>
         </div>
      </div>
   )
}

const DialogClose = DialogPrimitive.Close

function CloseDialog() {
   return (
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
         <X className="h-20 w-20" />
         <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
   )
}