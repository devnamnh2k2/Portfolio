import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
  className?: string
  children?: React.ReactNode
}
const Container = (props: Props) => {
  return <div className={cn('container mx-auto px-8 pt-24', props.className)}>{props.children}</div>
}

export default Container
