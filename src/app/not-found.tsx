import { ScreenFitText } from "@/components/text/screen-fit"
import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const NotFound = () => {
   return (
      <main className="max-w-xl mx-auto py-16 flex flex-col items-center gap-6">
         <ScreenFitText>
            4
            <span className="text-muted-foreground">0</span>
            4
         </ScreenFitText>
         <p className="text-center text-xl">We Couldn't find the page you were looking for.</p>
         <Link href="/" className={buttonVariants({ size: "lg", className: "flex items-center gap-2 group" })}>
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 duration-300"/>
            Go home
         </Link>
      </main>
   )
}

export default NotFound
