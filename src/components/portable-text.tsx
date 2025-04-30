"use client"

import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import Link from 'next/link'
import { motion } from "motion/react"

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN

const PortableContent = ({ value } : { value: PortableTextBlock[] }) => {
   return (
      <PortableText
         value={value}
         components={{
            marks: {
               strong: ({ children }) => <strong className="font-bold text-primary">{children}</strong>,
               em: ({ children }) => <em className="italic">{children}</em>,
               underline: ({ children }) => <u>{children}</u>,
               link: ({ value, children }) => (
                  
                  <Link href={value.href} className="text-purple-600 font-medium underline" target={new URL(value.href).origin == siteUrl ? "_self" : "_blank"} rel="noopener noreferrer">
                     {children}
                  </Link>
               ),
            },
            block: {
               normal: ({ children }) => (
                  <motion.p
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                  >
                     {children}
                  </motion.p>
               ),
               blockquote: ({ children }) => (
                  <motion.blockquote
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                     className="border-l-4 border-zinc-300 pl-4 italic text-zinc-600">
                     {children}
                  </motion.blockquote>
               ),
            },
         }}
      />
   )
}

export default PortableContent