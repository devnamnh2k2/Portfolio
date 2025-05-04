import React from 'react'
import TitleSection from '@/components/ui/title-section'
import { aboutData } from '@/mock/about.mock'
import { Button } from '@/components/ui/button'
import { SVGIcon } from '@/components/icon-svg'
import { Github, Code, Download, LaptopMinimal } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import TimelineExperience from '@/components/ui/timeline-experience'
import { timelineData } from '@/mock/timeLine.mock'

const AboutSection = ({ data = aboutData }: { data?: typeof aboutData }) => {
  return (
    <section className={'flex items-start gap-4'}>
      <div className={'flex flex-col justify-center'}>
        {/*header*/}
        <TitleSection text={data.about.title} />
        <p className={'leading-6 tracking-wide'}>{data.about.description}</p>
        {/* time line sub*/}
        <div className={'mt-7 mb-3'}>
          {timelineData.map((timeline, index) => (
            <TimelineExperience {...timeline} key={index} />
          ))}
        </div>
        {/* stack list*/}
        <div className={'mt-4 mb-3'}>
          <ul className={'flex list-inside list-["▹"] items-center gap-3 text-sm'}>
            {data.about.skills.map((skill, index) => (
              <li key={index} className={'text-gray-600'}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        {/*  navigage page, scroll contact section*/}
        <div className={'flex items-center gap-3'}>
          <Button variant={'default'} asChild className={'rounded-sm'}>
            <div className='text-white'>
              {<Github className='stroke-white' />}
              <p className='text-sm leading-8 font-medium'>{data.about.actions[0].label}</p>
            </div>
          </Button>
          <Button variant={'outline'} className={'rounded-sm'}>
            {data.about.actions[1].label}
          </Button>
        </div>
      </div>
      <div className={'basis-5/6 rounded-sm bg-gray-50 p-8 shadow-sm'}>
        <div className='mb-3 flex items-center gap-2'>
          <div className={'border-primary rounded-sm border bg-gray-50 p-2'}>
            <Code className={'stroke-primary'} />
          </div>
          <p className={'font-semibold'}>{data.studio.section}</p>
        </div>
        <p className={'text-md text-left leading-7 font-medium tracking-wide text-gray-600'}>
          {data.studio.intro.description}
        </p>
        <div className={'mt-4 mb-6'}>
          <Button variant={'outline'} asChild className={'rounded-sm'}>
            <div className='text-white'>
              {<Download className='stroke-primary' />}
              <p className='text-primary text-sm leading-8 font-medium'>{data.studio.download.label}</p>
            </div>
          </Button>
        </div>
        <Card>
          <CardContent className={'flex flex-col gap-3'}>
            <div className={'border-primary w-fit rounded-sm border bg-gray-50 p-2'}>
              <LaptopMinimal className={'stroke-primary'} />
            </div>
            <p className={'text-md font-semibold'}>{data.studio.specialty.title}</p>
            <p className='text-left text-sm leading-5 break-words text-gray-600'>{data.studio.specialty.description}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default AboutSection
