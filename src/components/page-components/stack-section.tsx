import React from 'react'
import TitleSection from '@/components/ui/title-section'
import { technologies } from '@/mock/stack.mock'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface IProps {
  data?: any
}
const StackSection = ({ data = technologies }: IProps) => {
  return (
    <section>
      <div className={'flex flex-col gap-3'}>
        {/* header */}
        <TitleSection text={'Technologies I use.'} />
        <p className={'text-lg leading-7 tracking-wide'}>
          {
            'Over the years, I have worked with a variety Over the years, I have worked with a v of technologies. Here are some of the technologies I have experience with:'
          }
        </p>
        {/*  content */}
        <div className={'mt-5 mb-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-6'}>
          {data?.map((stack: any, index: number) => (
            <Button variant={'outline'} size={'md'} className={'rounded-md'} asChild key={index}>
              <div className='hover:bg-primary/80 group transition duration-150 ease-linear'>
                <Image
                  src={stack.image || './next.svg'}
                  alt={stack.name}
                  width={100}
                  height={100}
                  className={'object-contain'}
                />
                <p className='text-md leading-8 font-medium group-hover:text-white'>{stack.name}</p>
              </div>
            </Button>
          ))}
        </div>
        <p className={'text-center text-lg'}>...and many more!</p>
      </div>
    </section>
  )
}

export default StackSection
