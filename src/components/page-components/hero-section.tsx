'use client'
import { IMG_HOME } from '@/assets/home'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import profileData from '@/mock/hero_section.mock'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'
import React from 'react'

const HeroSection = ({ data = profileData }: { data?: typeof profileData }) => {
  return (
    <Card className='w-full py-0'>
      <CardContent className='flex flex-col items-center gap-4 px-0'>
        <div className='flex items-start'>
          {/* Info NamNH */}
          <div className={'p-8'}>
            {/* About me */}
            <div className={'mb-4'}>
              <div className='flex items-center gap-2'>
                <div className={'rounded-sm bg-gray-50 p-2'}>{data.header.icon}</div>
                <p className={'font-semibold'}>{data.header.label}</p>
              </div>
            </div>

            {/* Content */}
            <div className={'flex flex-col gap-3 mb-7'}>
              <h1 className='text-primary text-7xl font-semibold capitalize'>{data.personal.greeting}</h1>
             <div className={'mt-2'}>
                 <p className={'text-blue-700 font-semibold before:content-["🌀"]'}>{data.personal.jobTitle}</p>
             </div>
              <p className={'text-left break-words leading-7'}>{data.personal.description}</p>
            </div>
            {/* Mission */}
            <Card className={'mb-4'}>
              <CardContent className={'flex flex-col gap-4'}>
                  <div className='flex items-center gap-2'>
                      <div className={'rounded-sm bg-gray-50 p-2'}> {data.mission.icon}</div>
                      <p className={'font-semibold'}>{data.mission.title}</p>
                  </div>
                <p className={'text-left break-words leading-7'}>{data.mission.content}</p>
                <p className='text-sm'>{data.mission.motto}</p>
              </CardContent>
            </Card>
            {/* Sub list stack */}
            <div className='flex items-center gap-4'>
              {data.techStack.map((item, index) => (
                <div key={index} className='p-1 rounded-sm border border-gray-200 shadow-sm'>
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
          <div className={'relative flex-grow-1 self-stretch rounded-e-sm bg-gray-50 p-8'}>
            {/* IMAGE PR NAMNH */}
            <div className='w-xl'>
              <AspectRatio ratio={3 / 3.3}>
                <Image src={data.profileImage.prNamNh} alt={'profile-image'} fill className='rounded-md object-cover' />
              </AspectRatio>
            </div>
              <div className='bg-[rgba(143, 85, 31, 0.8)] border-[rgba(71, 85, 105, 0.3)] absolute right-4 bottom-2 w-44 rounded-2xl border border-solid p-4 text-sm backdrop-blur-xs animate-[bounce_3s_ease-in-out_infinite] '>
                  <span className='text-[#3b82f6]'>const</span> developer = {'{'}
                  <br />
                  &nbsp;&nbsp;name: <span className='text-[#10b981]'>"Dev"</span>,<br />
                  &nbsp;&nbsp;passion: <span className='text-[#10b981]'>"Code"</span>,<br />
                  &nbsp;&nbsp;loves: <span className='text-[#10b981]'>"Building"</span>
                  <br />
                  {'}'}
              </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default HeroSection
