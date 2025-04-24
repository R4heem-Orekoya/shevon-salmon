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
import { TextAnimate } from "../text/animated"

const companies = [
   {
      name: "Opera",
      logo: OperaLogo,
      link: 'https://www.opera.com/'
   },
   {
      name: "Asus",
      logo: AsusLogo,
      link: 'https://www.asus.com/'
   },
   {
      name: "Apple",
      logo: AppleLogo,
      link: 'https://www.apple.com/'
   },
   {
      name: "Intel",
      logo: IntelLogo,
      link: 'https://www.intel.com/'
   },
   {
      name: "Samsung",
      logo: SamsungLogo,
      link: 'https://www.samsung.com/'
   },
   {
      name: "Google",
      logo: GoogleLogo,
      link: 'https://about.google/'
   },
   {
      name: "Shell",
      logo: ShellLogo,
      link: 'https://www.shell.com/'
   },
   {
      name: "BMW",
      logo: BMWLogo,
      link: 'https://www.bmw.com/'
   },
]

function Companies() {
   return (
      <div className='py-12'>
         <TextAnimate as="h2" className="text-center sm:text-lg font-sora font-medium">Companies I've Worked With</TextAnimate>
         <div className="relative max-w-3xl mx-auto overflow-hidden">
            <Marquee repeat={2} pauseOnHover className="[--duration:20s] mt-6 gap-12">
               {companies.map((item) => (
                  <Link href={item.link} target="_blank" key={item.name} className="relative grid place-items-center w-16 h-16 md:w-20 md:h-20 rounded hover:bg-purple-100">
                     <Image src={item.logo} alt={`${item.name} Logo`} className="w-8"/>
                  </Link> 
               ))} 
            </Marquee>
         </div>
      </div>
   )
}

export default Companies
