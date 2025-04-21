import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
  className?: string
  children?: React.ReactNode
}
const SubContainer = (props: Props) => {
  return <div className={cn('container mx-auto xl:max-w-[1250px]', props.className)}>{props.children}</div>
}

export default SubContainer
