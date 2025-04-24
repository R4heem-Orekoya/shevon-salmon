'use client'

import { Button, buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Falling from "~/falling.svg"

interface GlobalErrorProps {
   error: Error & { digest?: string }
   reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
   return (
      <html>
         <body>
            <main className="max-w-xl mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
               <div className="relative w-48 aspect-square">
                  <Image
                     src={Falling}
                     alt="404 image"
                     fill
                     className="object-cover"
                  />
               </div>
               <p className="text-5xl sm:text-6xl text-foreground font-sora font-semibold mt-4 mb-2">Error</p>
               <p className="text-center text-muted-foreground font-light">
                  {error.message}
               </p>
               <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link href="/" className={buttonVariants({ className: "flex items-center gap-2 mt-8 group" })}>
                     <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 duration-300" />
                     Go home
                  </Link>
                  <Button variant="outline" onClick={() => reset()}>Try again</Button>
               </div>
            </main>
         </body>
      </html>
   )
}