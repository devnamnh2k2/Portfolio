import React from 'react'
import experienceMock from '@/mock/experience.mock'
import TitleSection from '@/components/ui/title-section'
import ExperienceItem from '@/components/ui/experience-item'
interface Props {
  data?: any
}
const ExperienceSection = ({ data = experienceMock }: Props) => {
  return (
    <section className={''}>
      {/* header */}
      <div className={'mb-7'}>
        <TitleSection text={data.experienceTitle} />
        <p className={'leading-6 tracking-wide'}>{data.experienceDesc}</p>
      </div>
      {/* content timeLine */}
      {data.experiences?.map((experience: any, index: number) => <ExperienceItem data={experience} key={index} />)}
    </section>
  )
}

export default ExperienceSection
