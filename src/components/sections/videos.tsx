"use client"

import { Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import image from "../../../public/space.jpg"
import { viewFormatter } from "@/lib/utils"
import moment from "moment"
import { TextAnimate } from "../text/animated"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { buttonVariants } from "../ui/button"
import { motion } from "motion/react"

const videoData = [
   {
      thumbnail: image,
      title: "My Modern Productivity Desk Setup 2025",
      duration: "18 min",
      datePosted: "15/9/2021",
      videoLink: "https://www.youtube.com/watch?v=KYuzrETf4wo",
      viewCount: 234_444
   },
   {
      thumbnail: image,
      title: "My Modern Productivity Desk Setup 2025",
      duration: "18 min",
      datePosted: "15/9/2021",
      videoLink: "https://www.youtube.com/watch?v=KYuzrETf4wo",
      viewCount: 234_444
   },
   {
      thumbnail: image,
      title: "My Modern Productivity Desk Setup 2025",
      duration: "18 min",
      datePosted: "15/9/2021",
      videoLink: "https://www.youtube.com/watch?v=KYuzrETf4wo",
      viewCount: 234_444
   },
   {
      thumbnail: image,
      title: "My Modern Productivity Desk Setup 2025",
      duration: "18 min",
      datePosted: "15/9/2021",
      videoLink: "https://www.youtube.com/watch?v=KYuzrETf4wo",
      viewCount: 234_444
   },
   {
      thumbnail: image,
      title: "My Modern Productivity Desk Setup 2025",
      duration: "18 min",
      datePosted: "15/9/2021",
      videoLink: "https://www.youtube.com/watch?v=KYuzrETf4wo",
      viewCount: 234_444
   },
   {
      thumbnail: image,
      title: "My Modern Productivity Desk Setup 2025",
      duration: "18 min",
      datePosted: "15/9/2021",
      videoLink: "https://www.youtube.com/watch?v=KYuzrETf4wo",
      viewCount: 234_444
   },
]

export default function Videos() {
   return (
      <section className="py-12 max-w-5xl mx-auto flex flex-col">
         <div className="flex flex-col items-center gap-3 text-center">
         <TextAnimate 
            as="h2" 
            animation="blurInUp"
            className="text-2xl font-sora font-semibold tracking-tight sm:text-3xl xl:text-4xl"
         >
            Youtube Videos
         </TextAnimate>
            <TextAnimate as="p" animation="fadeIn" className="max-w-sm text-muted-foreground">
               Exploring tech and lifestyle—through a camera made for storytelling.
            </TextAnimate>
         </div>


         <VideoSlider />
         
         <div className="mx-auto mt-6">
            <Link href="https://youtube.com/@ShevonSalmon/videos" target="_blank" className={buttonVariants({ size: "lg" })}>
               See All Videos
            </Link>
         </div>
      </section>
   )
}


function VideoSlider() {
   return (
      <motion.div 
         initial={{
            opacity: 0,
            y: 20
         }}
         whileInView={{
            opacity: 1,
            y: 0
         }}
         transition={{
            duration: 0.6,
            ease: "easeInOut"
         }}
         viewport={{
            once: true
         }}
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
            {videoData.map((item, index) => (
               <SwiperSlide key={index} className="pb-16 cursor-grab">
                  <Link href={item.videoLink} target="_blank">
                     <div className="relative rounded-md aspect-[16/10] bg-zinc-100 overflow-hidden cursor-pointer group">
                        <Image src={item.thumbnail} alt={item.title} fill className="object-cover group-hover:scale-110 transition duration-500" />
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
                        <p>{viewFormatter(item.viewCount)} views</p>
                        <span>.</span>
                        <p>{moment(item.datePosted, "DDMMYYYY").fromNow()}</p>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </motion.div>
   )
}
