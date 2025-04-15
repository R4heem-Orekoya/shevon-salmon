"use client"

import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

const tabs = [
   {
      label: "Tab 1",
      path: "tab-one"
   },
   {
      label: "Tab 2",
      path: "tab-two"
   },
   {
      label: "Tab 3",
      path: "tab-three"
   }
] as const

const bg = {
   pink: "bg-pink-500",
   green: "bg-green-500",
   purple: "bg-purple-500",
   orange: "bg-orange-500"
}

type ActiveTab = (typeof tabs)[number]["path"]
type Active = "pink" | "purple" | "green" | "orange" | null

//https://examples.motion.dev/react/parallax, this page will look like this

const Page = () => {
   const [isToggled, setIsToggled] = useState(false)
   const [activeTab, SetActiveTab] = useState<ActiveTab>("tab-one")
   const [active, setActive] = useState<Active>(null)
   
   return (
      <main className="flex flex-col items-center py-8 space-y-12 min-h-screen">
         {/* <div 
            onClick={() => setIsToggled(prev => !prev)} 
            className={cn("w-96 h-48 p-4 bg-red-300 rounded-full flex items-center cursor-pointer", {
               "justify-start" : !isToggled,
               "justify-end": isToggled
            })}>
            <motion.div 
               layout
               className="size-40 rounded-full bg-blue-100" 
            />
         </div> */}
         
         
         {/* <div className="bg-blue-400 p-1 w-96 flex rounded-lg overflow-hidden">
            {tabs.map((tab) => (
               <div onClick={() => SetActiveTab(tab.path as ActiveTab)} className="relative z-20 px-4 py-2 cursor-pointer select-none">
                  {tab.label}
                  {activeTab === tab.path && (
                     <motion.div layoutId="indicator" className="absolute inset-0 bg-red-300 -z-10 rounded-sm"/>
                  )}
               </div>
            ))}
         </div> */}
         
         
         <div className="relative flex items-center justify-center border size-96">
            <div className="grid gap-4 grid-cols-2">
               <motion.div layoutId="box-pink" onClick={() => setActive("pink")} className="size-32 bg-pink-500 rounded-lg">
                  
               </motion.div>
               <motion.div layoutId="box-green" onClick={() => setActive("green")} className="size-32 bg-green-500 rounded-lg">
                  
               </motion.div>
               <motion.div layoutId="box-purple" onClick={() => setActive("purple")} className="size-32 bg-purple-500 rounded-lg">
                  
               </motion.div>
               <motion.div layoutId="box-orange" onClick={() => setActive("orange")} className="size-32 bg-orange-500 rounded-lg">
                  
               </motion.div>
            </div>
            
            <AnimatePresence mode="sync">
               {active && (
                  <div onClick={() => setActive(null)} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-96 z-[9] flex items-center justify-center transition">
                     <motion.div layoutId={`box-${active}`} className={cn("relative size-60 rounded-lg overflow-hidden", bg[active])}>
                     <motion.div
                        initial={{ y: "100%" }} // Start completely out of view
                        animate={{ y: "0%" }} // Slide up into view
                        exit={{ y: "100%" }} // Slide down when closing
                        transition={{ duration: 0.4, ease: "easeInOut" }} 
                        className="absolute bottom-0 w-full h-16 bg-blue-300"
                     />
                     </motion.div>
                  </div>
               )}
            </AnimatePresence>
         </div>
         
      </main>
   )   
}

export default Page
