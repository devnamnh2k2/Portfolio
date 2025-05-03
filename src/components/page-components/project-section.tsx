import React from 'react'
import TitleSection from '@/components/ui/title-section'

const ProjectSection = () => {
  return (
    <section>
      <div>
        <TitleSection text={'Recent Projects.'} />
        <p className={'text-lg leading-7 tracking-wide'}>
          {'Explore some of my recent projects below. For more, visit my GitHub profile.'}
        </p>
      </div>
    </section>
  )
}

export default ProjectSection
