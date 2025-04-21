import ContactSection from '@/components/page-components/contact-section';
import ExperienceSection from '@/components/page-components/experiences-section';
import HeroSection from '@/components/page-components/hero-section';
import ProjectSection from '@/components/page-components/project-section';
import StackSection from '@/components/page-components/stack-section';
import React from 'react';
const Page = () => {
    return (
        <div>
            {/* Hero section */}
            <div className='py-4'>
                <HeroSection />
            </div>
            {/* Experiences sections */}
            <div className="py-4">
                <ExperienceSection />
            </div>
            {/* Stack section */}
            <div className='py-4'>
                <StackSection />
            </div>
            {/* Project sections */}
            <div className="py-4">
                <ProjectSection />
            </div>
            {/* Contact section */}
            <div className="py-4">
                <ContactSection />
            </div>
        </div>
    );
};

export default Page;