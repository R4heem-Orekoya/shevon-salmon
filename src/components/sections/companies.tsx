import { Marquee } from "../ui/marquee"
import Image from "next/image"
import Link from "next/link"
import { TextAnimate } from "../text/animated"
import { HOME_PAGE_QUERYResult } from "@/root/sanity.types"
import { urlFor } from "@/sanity/utils/image"

interface CompaniesProps {
   content: HOME_PAGE_QUERYResult[number]["companiesSection"]
}

export default function Companies({ content }: CompaniesProps) {
   return (
      <div className='py-12'>
         <TextAnimate as="h2" className="text-center sm:text-lg font-sora font-medium">
            {content?.heading ?? "Companies I've Worked With"}
         </TextAnimate>
         <div className="relative max-w-3xl mx-auto overflow-hidden">
            <Marquee repeat={2} pauseOnHover className="[--duration:20s] mt-6 gap-12">
               {content?.companiesList?.map((item) => (
                  <Link href={item.companyWebsiteLink!} target="_blank" key={item.companyName} className="relative grid place-items-center w-16 h-16 md:w-20 md:h-20 rounded hover:bg-purple-100">
                     <Image
                        src={urlFor(item.companyLogo?.asset?.url!).url()}
                        width={24}
                        height={24}
                        alt={`${item.companyName} Logo`} className="w-8"
                     />
                  </Link>
               ))}
            </Marquee>
         </div>
      </div>
   )
}