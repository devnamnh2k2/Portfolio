import ContactSection from '@/components/page-components/contact-section'
import ExperienceSection from '@/components/page-components/experiences-section'
import HeroSection from '@/components/page-components/hero-section'
import ProjectSection from '@/components/page-components/project-section'
import StackSection from '@/components/page-components/stack-section'
import React from 'react'
import AboutSection from '@/components/page-components/about-section'
import TimelineExperience from '@/components/ui/timeline-experience'
const Page = () => {
  return (
    <div>
      {/* Hero section */}
      <div className='py-4'>
        <HeroSection />
      </div>
      {/*About sections*/}
      <div className={'py-10'}>
        <AboutSection />
      </div>
      {/* Experiences sections */}
      <div className='py-10'>
        <ExperienceSection />
      </div>
      {/* Stack section */}
      <div className='py-10'>
        <StackSection />
      </div>
      {/* Project sections */}
      <div className='py-10'>
        <ProjectSection />
      </div>
      {/* Contact section */}
      <div className='py-10'>
        <ContactSection />
      </div>
    </div>
  )
}

export default Page

export async function generateStaticParams() {
  return [{ slug: 'hello-world' }, { slug: 'nextjs-tutorial' }, { slug: 'my-first-post' }]
}
