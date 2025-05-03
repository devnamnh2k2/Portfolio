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
    <div className={"relative pl-10 mb-10 after:content-[''] after:absolute after:-left-1 after:top-4 after:w-0.5 after:h-full after:bg-linear-to-r after:from-primary/100 after:to-[#F9FAFB]"}>
      <div className={'absolute p-2 size-[60px] rounded-full ring-2 md:ring-2 ring-primary bg-white flex items-center justify-center -left-8 top-20 z-20 overflow-hidden'}>
        <Image alt={'logo-company'} src={IMG_HOME.logoCompany} width={100} height={100} className={'object-contain'} />
      </div>
      {/*  Content*/}
      <Card>
        <CardHeader>
          <div>
            <h4 className='capitalize text-4xl text-primary flex items-center gap-3 font-medium'>
              {experience.jobTitle} {' '}
              {experience.currentJob && <Badge variant='default'>{'Current'}</Badge>}
            </h4>
            <div className={'flex items-center gap-3'}>
              <h5 className='text-md'>{experience.companyName}</h5>
              <p className='text'>{experience.employmentType}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className='text-lg text-blue-950 flex items-center gap-3 mb-3'>
            <span>
              {experience.startDate} - {experience.endDate}
            </span>
            <span className='divider'>|</span>
            <span>
              {experience.location} - {experience.workArrangement}
            </span>
          </div>
          {experience.responsibilities && (
            <ul className='list-disc list-inside text-lg'>
              {experience.responsibilities.map((responsibility: any, index: number) => (
                <li key={index} className='mb-4 font-medium text-slate-600 leading-8'>
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
      <h3 className='text-primary text-2xl mb-2'>{skillArea.title}</h3>
      <p className='text-md text-left text-gray-700 font-normal'>{skillArea.description}</p>

      {skillArea.keySkills && (
        <div className='bg-gray-50 rounded-md p-10 mt-4'>
          <ul className='list-disc list-inside text-lg'>
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
