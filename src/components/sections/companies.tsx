import { Marquee } from "../ui/marquee"
import AsusLogo from "~/asus.svg"
import AppleLogo from "~/apple.svg"
import ShellLogo from "~/shell.svg"
import IntelLogo from "~/intel.svg"
import SamsungLogo from "~/samsung.svg"
import GoogleLogo from "~/google.svg"
import OperaLogo from "~/opera.svg"
import BMWLogo from "~/bmw.svg"
import Image from "next/image"
import Link from "next/link"

const companies = [
   {
      name: "Opera",
      logo: OperaLogo,
      link: 'https://www.opera.com/'
   },
   {
      name: "Asus",
      logo: AsusLogo,
      link: 'https://www.opera.com/'
   },
   {
      name: "Apple",
      logo: AppleLogo,
      link: 'https://www.opera.com/'
   },
   {
      name: "Intel",
      logo: IntelLogo,
      link: 'https://www.opera.com/'
   },
   {
      name: "Samsung",
      logo: SamsungLogo,
      link: 'https://www.opera.com/'
   },
   {
      name: "Google",
      logo: GoogleLogo,
      link: 'https://www.opera.com/'
   },
   {
      name: "Shell",
      logo: ShellLogo,
      link: 'https://www.opera.com/'
   },
   {
      name: "BMW",
      logo: BMWLogo,
      link: 'https://www.opera.com/'
   },
]

function Companies() {
   return (
      <div className='py-8'>
         <h2 className="text-center sm:text-xl uppercase font-mono_sans font-medium">Companies I've Worked With</h2>
         <div className="relative max-w-3xl mx-auto overflow-hidden">
            <Marquee repeat={2} pauseOnHover className="[--duration:20s] mt-6 gap-12">
               {companies.map((item) => (
                  <Link href={item.link} target="_blank" key={item.name} className="relative grid place-items-center w-16 h-16 md:w-20 md:h-20 rounded hover:bg-zinc-100">
                     <Image src={item.logo} alt={`${item.name} Logo`} className="w-8"/>
                  </Link> 
               ))} 
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-background"></div>
         </div>
      </div>
   )
}

export default Companies
