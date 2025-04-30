"use client"

import { VideoInfo } from "@/types"
import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import moment from "moment"
import { viewFormatter } from "@/lib/utils"
import { Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface VideoSliderProps {
   videos: VideoInfo[]
}

export default function VideoSlider({ videos }: VideoSliderProps) {

   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, ease: "easeInOut" }}
         viewport={{ once: true }}
         className="w-full max-w-5xl mx-auto mt-12"
      >
         <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
               640: { slidesPerView: 1.5 },
               768: { slidesPerView: 2 },
               1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
         >
            {videos.map((item, index) => (
               <SwiperSlide key={index} className="pb-16 cursor-grab">
                  <Link href={item.videoLink} target="_blank">
                     <div className="relative rounded-md aspect-[16/10] bg-zinc-100 overflow-hidden cursor-pointer group">
                        <Image
                           src={item?.thumbnail.url}
                           alt={item?.title}
                           fill
                           className="object-cover group-hover:scale-110 transition duration-500"
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 duration-300 grid place-items-center rounded-full size-12 bg-zinc-100/20 border backdrop-blur-sm">
                           <Play className="size-5 h-5 fill-primary-foreground stroke-primary-foreground" />
                        </div>
                     </div>
                  </Link>
                  <div className="pt-3">
                     <h3 className="text-sm font-sora font-medium line-clamp-2 text-ellipsis">
                        {item.title}
                     </h3>
                     <div className="flex items-center gap-1 text-xs font-medium mt-1 text-muted-foreground">
                        <p>{viewFormatter(item.views)} views</p>
                        <span>.</span>
                        <p>{moment(item.datePosted).fromNow()}</p>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </motion.div>
   );
}