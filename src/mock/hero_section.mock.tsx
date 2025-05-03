import { IMG_HOME } from '@/assets/home'

const profileData = {
  header: {
    icon: '🌐',
    label: 'ABOUT ME'
  },

  personal: {
    greeting: "Hey, I'm Developer 👋",
    jobTitle: 'Full Stack Developer',
    description:
      'Lorem ipsum dolor sit amet consectetur radicalising elit. Ipsam rerum unde illum iste repudiandae vel dignissimos maxime ipsum recusandae architecto. Quisquam, cumque, voluptatibus, eveniet. Quod, doloremque?'
  },

  mission: {
    icon: '🚀',
    title: 'MY MISSION',
    content:
      'Bridging the gap between design and development: Where creativity meets functionality, and innovation drives progress.',
    motto: "Keep moving, don't settle. 🚀"
  },

  techStack: [
    {
      name: 'React',
      icon: '⚛️'
    },
    {
      name: 'JavaScript',
      icon: '🟨'
    },
    {
      name: 'Python',
      icon: '🐍'
    },
    {
      name: 'Angular',
      icon: '🅰️'
    },
    {
      name: 'TypeScript',
      icon: '🔷'
    }
  ],

  codeBlock: {
    language: 'javascript',
    code: 'const developer = {\n  name: "Dev",\n  passion: "Code",\n  loves: "Building"\n};'
  },

  profileImage: IMG_HOME
}

export default profileData
