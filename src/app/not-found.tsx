import GlitchText from "@/components/text/glitch"
import { ScreenFitText } from "@/components/text/screen-fit"
import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Falling from "~/crashed-error.svg"

const NotFound = () => {
   return (
      <main className="max-w-xl mx-auto py-16 flex flex-col items-center">
         <div className="relative w-48 aspect-square">
            <Image
               src={Falling}
               alt="404 image"
               fill
               className="object-cover"
            />
         </div>
         <p className="text-5xl sm:text-6xl text-foreground font-mono_sans font-semibold mt-4 mb-2">404</p>
         <p className="text-center text-muted-foreground font-light">
            Page not found, vibes still immaculate.
         </p>
         <Link href="/" className={buttonVariants({ className: "flex items-center gap-2 mt-8 group" })}>
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 duration-300" />
            Go home
         </Link>
      </main>
   )
}

export default NotFound
