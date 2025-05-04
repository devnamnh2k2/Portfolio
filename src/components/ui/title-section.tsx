import React from 'react'
import { cn } from '@/lib/utils'
type Props = {
  className?: string
  text: string
}
const TitleSection = ({ className, text }: Props) => {
  return (
    <h3
      className={cn(
        className,
        'after:bg-primary relative mb-6 text-5xl font-bold capitalize after:absolute after:bottom-[-10px] after:left-0 after:h-[4px] after:w-[70px] after:content-[""]'
      )}
    >
      {text}
    </h3>
  )
}

export default TitleSection
