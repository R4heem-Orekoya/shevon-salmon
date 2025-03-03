import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import image from "../../../public/space.jpg"
import { viewFormatter } from "@/lib/utils"
import moment from "moment"

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

const Videos = () => {
   return (
      <section className="py-12 max-w-5xl mx-auto">
         <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold font-mono_sans tracking-tight">Youtube Videos</h2>
            
            <Link href="https://youtube.com/@ShevonSalmon/videos" className="flex items-center gap-1 font-poppins tracking-tight hover:text-muted-foreground transition-all group">
               See All Videos
               <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-all"/>
            </Link>
         </div>
         
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {videoData.map((item, index) => (
               <div key={index} className="col-span-1 ">
                  <Link href={item.videoLink}>
                     <div className="relative rounded-md aspect-[16/10] bg-zinc-100 overflow-hidden cursor-pointer group">
                        <Image src={item.thumbnail} alt={item.title} fill className="object-cover group-hover:scale-110 transition duration-500"/>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 duration-300 grid place-items-center rounded-full size-12 bg-zinc-100/20 border backdrop-blur-sm">
                           <Play className="size-5 h-5 fill-primary-foreground stroke-primary-foreground"/>
                        </div>
                     </div>
                  </Link>
                  <div className="pt-3">
                     <h3 className="text-sm font-mono_sans font-medium line-clamp-2 text-ellipsis">
                        {item.title}
                     </h3>
                     <div className="flex items-center gap-1 text-xs font-medium mt-1 text-muted-foreground">
                        <p>{viewFormatter(item.viewCount)} views</p>
                        <span>.</span>
                        <p>{moment(item.datePosted, "DDMMYYYY").fromNow()}</p>
                     </div>
                  </div>
                  
               </div>
            ))}
         </div>
      </section>
   )
}

export default Videos