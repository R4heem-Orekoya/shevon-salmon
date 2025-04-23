'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useLayoutEffect, useState, ElementType } from 'react'
import { cn } from '@/lib/utils'

interface AutoLineSlideTextProps {
  children: string
  className?: string
  as?: ElementType
}

export default function AutoLineSlideText({
  children,
  className,
  as: Component = 'div',
}: AutoLineSlideTextProps) {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: false })

  const [lines, setLines] = useState<string[][]>([])

  // Figure out whether we should render lines as block or inline
  const isInlineParent = ['p', 'span', 'a', 'strong', 'em', 'label'].includes(
    Component.toString().toLowerCase()
  )
  const LineWrapper = isInlineParent ? motion.span : motion.div

  useLayoutEffect(() => {
    if (!containerRef.current) return

    const words = Array.from(containerRef.current.querySelectorAll('[data-word]'))
    const linesArr: string[][] = []
    let currentLine: string[] = []
    let currentTop = null

    for (const word of words) {
      const rect = word.getBoundingClientRect()
      if (currentTop === null) currentTop = rect.top

      if (Math.abs(rect.top - currentTop) > 5) {
        linesArr.push(currentLine)
        currentLine = [word.textContent || '']
        currentTop = rect.top
      } else {
        currentLine.push(word.textContent || '')
      }
    }

    if (currentLine.length > 0) {
      linesArr.push(currentLine)
    }

    setLines(linesArr)
  }, [children])

  return (
    <Component
      ref={containerRef as any}
      className={cn('relative overflow-hidden', className)}
    >
      {lines.length === 0 ? (
        <span className="invisible flex flex-wrap w-full">
          {children.split(' ').map((word, i) => (
            <span key={i} data-word className="mr-2">
              {word}
            </span>
          ))}
        </span>
      ) : (
        <>
          {lines.map((line, i) => (
            <LineWrapper
              key={i}
              initial={{ y: '100%', opacity: 0, filter: "blur(3px)" }}
              animate={isInView ? { y: 0, opacity: 1, filter: "blur(0)" } : {}}
              transition={{ delay: i * 0.25, duration: 0.5 }}
              className={isInlineParent ? 'inline-block' : 'block'}
            >
              {line.join(' ')}
              {isInlineParent ? ' ' : null}
            </LineWrapper>
          ))}
        </>
      )}
    </Component>
  )
}
