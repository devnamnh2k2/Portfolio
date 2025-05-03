const experienceMock = {
  experienceTitle: 'My Experience',
  experienceDesc: 'Selected chronicles of professional activities',
  experiences: [
    {
      id: 1,
      jobTitle: 'Software Engineer',
      companyName: 'Valor PayTech',
      companyLogo: 'valor-logo.svg',
      employmentType: 'Full-time',
      currentJob: true,
      startDate: 'December 2024',
      endDate: 'Present',
      location: 'Chennai, India',
      workArrangement: 'Onsite',
      responsibilities: [
        'Implement feature enhancements based on user feedback, contributing to continuous improvement and increased customer satisfaction',
        'Identify and Resolve software bugs through thorough testing and debugging, ensuring a seamless user experience and maintaining application stability',
        'Collaborated with multiple internal teams to gather requirements and prioritize bug fixes and feature requests, ensuring alignment with overall project objectives',
        'Conduct peer reviews fostering a culture of collaboration and continuous learning within the team'
      ],
      skillAreas: [
        {
          title: 'Payment Processing Systems',
          description:
            'Developed and maintained payment processing systems ensuring secure transactions and compliance with financial regulations. Implemented real-time processing capabilities and integrated with various payment gateways.',
          keySkills: ['Payment gateway integration', 'Transaction security protocols', 'PCI DSS compliance']
        },
        {
          title: 'Frontend Development',
          description:
            'Built responsive user interfaces using React.js and Redux, ensuring optimal performance and user experience across different devices and browsers.',
          keySkills: ['React.js component architecture', 'State management with Redux', 'Responsive design principles']
        }
      ]
    }
  ]
}

export default experienceMock
