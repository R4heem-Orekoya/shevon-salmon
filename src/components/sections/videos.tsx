import Link from "next/link"
import { TextAnimate } from "../text/animated"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { buttonVariants } from "../ui/button"
import { HOME_PAGE_QUERYResult } from "@/root/sanity.types"
import VideoSlider from "../video-slider"
import { tryCatch } from "@/lib/utils"
import { VideoInfo } from "@/types"

async function fetchVideo(id: string) {
   const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id}&key=${process.env.YT_API_KEY}`;
   const res = await fetch(url, {
      next: {
         tags: ["yt-video"]
      }
   });

   if (!res.ok) throw Error("Failed to fetch")

   const json = await res.json();

   const item = json.items[0]

   const thumbnail =
      item.snippet.thumbnails.maxres ??
      item.snippet.thumbnails.standard ??
      item.snippet.thumbnails.high ??
      item.snippet.thumbnails.medium ??
      item.snippet.thumbnails.default;


   const videoData: VideoInfo = {
      id: item.id,
      title: item.snippet.title,
      datePosted: item.snippet.publishedAt,
      description: item.snippet.description,
      duration: item.contentDetails.duration,
      thumbnail: thumbnail,
      videoLink: `https://www.youtube.com/watch?v=${id}`,
      views: item.statistics.viewCount
   }

   return videoData
}

interface VideosProps {
   content: HOME_PAGE_QUERYResult[number]["ytVideosSection"]
}

export default async function Videos({ content }: VideosProps) {
   const results = await Promise.all(
      content?.videos!?.map(async (item) => {
         if (!item.videoId) return null;
         const { data, error } = await tryCatch(fetchVideo(item.videoId));
         if (!data || error) {
            console.log(error);

            return null;
         }
         return data;
      })
   )

   const videos = results.filter((v): v is VideoInfo => v !== null)  

   return (
      <section className="py-12 max-w-5xl mx-auto flex flex-col">
         <div className="flex flex-col items-center gap-3 text-center">
            <TextAnimate
               as="h2"
               animation="blurInUp"
               className="text-2xl font-sora font-semibold tracking-tight sm:text-3xl xl:text-4xl"
            >
               {content?.heading ?? "Youtube Videos"}
            </TextAnimate>
            <TextAnimate as="p" animation="fadeIn" className="max-w-sm text-muted-foreground">
               {content?.subHeading ?? "Exploring tech and lifestyle—through a camera made for storytelling."}
            </TextAnimate>
         </div>

         {content?.videos && (
            <VideoSlider videos={videos} />
         )}

         <div className="mx-auto mt-6">
            <Link href="https://youtube.com/@ShevonSalmon/videos" target="_blank" className={buttonVariants({ size: "lg" })}>
               See All Videos
            </Link>
         </div>
      </section>
   )
}