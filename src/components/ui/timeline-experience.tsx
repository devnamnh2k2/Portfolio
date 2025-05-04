import React from 'react'
import { TimeLineType } from '@/types/timeLine'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
} & TimeLineType

const TimelineExperience = ({ className, startYear, endYear, title, description }: Props) => {
  const renderYear = () => {
    if (startYear && endYear) return `${startYear} - ${endYear}`
    else return `${startYear}`
  }
  return (
    <div className={cn(className, 'border-l-2 pb-1.5 pl-4')}>
      <div className="before:bg-accent before:border-primary relative before:absolute before:-top-0 before:-left-6 before:size-4 before:rounded-full before:border-2 before:content-['']">
        <div className='text-accent-foreground text-sm font-semibold'>{renderYear()}</div>
        <h5 className='text-md text-primary mb-1.5 font-semibold capitalize'>{title}</h5>
        <p className='mb-3'>{description}</p>
      </div>
    </div>
  )
}

export default TimelineExperience
