import React from 'react'
import { cn } from '@/lib/utils'
type Props = {
  className?: string
  text: string
}
const TitleSection = ({className, text}: Props) => {
  return (
    <h3 className={cn((className),' text-5xl font-bold mb-6 capitalize relative after:content-[""] after:absolute after:bottom-[-10px] after:left-0 after:w-[70px] after:h-[4px] after:bg-primary')}>{text}</h3>
  )
}

export default TitleSection