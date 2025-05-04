import React from 'react'
import Image from 'next/image'
import { IMG_HOME } from '@/assets/home'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface IProps {
  data: any
}
const ExperienceItem = ({ data: experience }: IProps) => {
  return (
    <div
      className={
        "after:from-primary/100 relative mb-10 pl-10 after:absolute after:top-4 after:-left-1 after:h-full after:w-0.5 after:bg-linear-to-r after:to-[#F9FAFB] after:content-['']"
      }
    >
      <div
        className={
          'ring-primary absolute top-20 -left-8 z-20 flex size-[60px] items-center justify-center overflow-hidden rounded-full bg-white p-2 ring-2 md:ring-2'
        }
      >
        <Image alt={'logo-company'} src={IMG_HOME.logoCompany} width={100} height={100} className={'object-contain'} />
      </div>
      {/*  Content*/}
      <Card>
        <CardHeader>
          <div>
            <h4 className='text-primary flex items-center gap-3 text-4xl font-medium capitalize'>
              {experience.jobTitle} {experience.currentJob && <Badge variant='default'>{'Current'}</Badge>}
            </h4>
            <div className={'flex items-center gap-3'}>
              <h5 className='text-md'>{experience.companyName}</h5>
              <p className='text'>{experience.employmentType}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className='mb-3 flex items-center gap-3 text-lg text-blue-950'>
            <span>
              {experience.startDate} - {experience.endDate}
            </span>
            <span className='divider'>|</span>
            <span>
              {experience.location} - {experience.workArrangement}
            </span>
          </div>
          {experience.responsibilities && (
            <ul className='list-inside list-disc text-lg'>
              {experience.responsibilities.map((responsibility: any, index: number) => (
                <li key={index} className='mb-4 leading-8 font-medium text-slate-600'>
                  {responsibility}
                </li>
              ))}
            </ul>
          )}
          {experience.skillAreas &&
            experience.skillAreas.map((skillArea: any, index: number) => (
              <SkillArea key={index} skillArea={skillArea} />
            ))}
        </CardContent>
      </Card>
    </div>
  )
}
const SkillArea = ({ skillArea }: { skillArea: any }) => {
  return (
    <div className='mb-4'>
      <h3 className='text-primary mb-2 text-2xl'>{skillArea.title}</h3>
      <p className='text-md text-left font-normal text-gray-700'>{skillArea.description}</p>

      {skillArea.keySkills && (
        <div className='mt-4 rounded-md bg-gray-50 p-10'>
          <ul className='list-inside list-disc text-lg'>
            {skillArea.keySkills.map((skill: any, index: number) => (
              <li key={index} className='mb-3'>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ExperienceItem
