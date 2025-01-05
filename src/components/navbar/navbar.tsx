"use client"

import { navLinks } from '@/consts/nav-links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const Navbar = () => {
   const pathname = usePathname()
   
   console.log(pathname);
   
   return (
      <div className='w-[min(1200px,90%)] mx-auto bg-gradient-to-b from-white to-transparent sticky top-0 z-[9999] hidden md:flex'>
         <nav className='w-full flex items-center justify-between h-20'>
            <Link href="/" className='font-mono_sans font-semibold'>
               {/* Shevon
               <span>.</span> */}
            </Link>
            
            <ul className='flex items-center gap-6'>
               {navLinks.map((item) => (
                  <li key={item.href}>
                     <Link 
                        href={item.href} 
                        className={cn(
                           'text-sm text-muted-foreground hover:text-primary transition-colors', 
                           { "underline-offset-4 underline text-primary font-medium": pathname === item.href})
                        }
                     >
                        {item.label}
                     </Link>
                  </li>
               ))}
            </ul>
            
            <Button variant="outline" asChild className='font-mono_sans'>
               <Link href="/contact">
                  Contact me
               </Link>
            </Button>
         </nav>
      </div>
   )
}

export default Navbar
