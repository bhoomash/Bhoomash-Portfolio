import { ProjectProps } from '../components/ProjectCard';

export const allProjects: ProjectProps[] = [
  {
    id: 'project-1',
    title: 'Go Green App (Farming Assistant)',
    description: 'AI-powered React Native app offering seasonal crop suggestions and real-time weather insights using OpenWeatherMap API.',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg',
    tags: ['mobile','React Native', 'TypeScript', 'OpenWeather', 'Python'],
    repoUrl: 'https://github.com/bhoomash/go-green',
    featured: true
  },
  {
    id: 'project-2',
    title: 'FarmTech (E-Commerce)',
    description: 'Full-stack web application for selling fertilizers and farming tools with cart and product filtering support.',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg',
    tags: ['web','React', 'Tailwind CSS', 'Next', 'Node', 'Express'],
    liveUrl: 'https://farm-tech-erode.vercel.app',
    repoUrl: 'https://github.com/bhoomash/FarmTech',
    featured: true
  },
  {
    id: 'project-3',
    title: 'Flash Vault (Secure Encrypted Messages)',
    description: 'React web app for encrypted message sharing with password-based AES encryption and temporary shareable links.',
    image: 'https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg',
    tags: ['web','React', 'JavaScript', 'AES', 'Encryption', 'Security'],
    liveUrl: 'https://flash-vault-eight.vercel.app',
    repoUrl: 'https://github.com/bhoomash/lock-bin',
    featured: true
  },
  {
    id: 'project-5',
    title: 'Portfolio',
    description: 'Clean and animated React portfolio showcasing my projects, skills, and background.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
    tags: ['web', 'React', 'Animations', 'UI/UX', 'TypeScript'],
    liveUrl: 'https://bhoomash.me/',
    repoUrl: 'https://github.com/bhoomash/Bhoomash-Portfolio',
    featured: true
  },{
  id: 'project-3',
  title: 'MentorLink (Skill-Based Mentorship Platform)',
  description: 'A MERN-stack platform connecting skilled mentors with learners, featuring role-based dashboards, secure authentication, and real-time guidance features.',
  image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
  tags: ['mobile', 'React-Native', 'Node.js', 'MongoDB', 'Grid-fs', 'Express'],
  repoUrl: 'https://github.com/bhoomash/mentorlink',
  featured: true
},
{
  id: 'project-4',
  title: 'Public Way Service (Government Service Portal)',
  description: 'A digital service portal that streamlines public service requests with authentication, request tracking, and admin-side verification modules.',
  image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  tags: ['web','React', 'FASTAPI', 'MongoDB', 'RAG'],
  repoUrl: 'https://github.com/bhoomash/public-way-service',
  featured: true
},
  {
    id: 'project-6',
    title: 'FestivalKart (Diwali E-Commerce)',
    description: 'Next.js e-commerce platform for selling Diwali crackers with Firebase OTP authentication, cart, wishlist, and Razorpay integration.',
    image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg',
    tags: ['web','Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'MongoDB', 'Razorpay'],
    liveUrl: 'https://festivalkart.vercel.app/',
    repoUrl: 'https://github.com/bhoomash/festivalkart',
    featured: true
  },{
  id: 'project-voice-notes',
  title: 'VoiceNotes AI',
  description: 'AI-powered voice notes and transcription web application. Record, transcribe, and manage voice notes with real-time speech-to-text powered by AssemblyAI.',
  image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg',
  tags: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'MongoDB', 'AssemblyAI', 'Clerk Auth'],
  liveUrl: 'https://audio-note-llm.vercel.app/',
  repoUrl: 'https://github.com/bhoomash/audionote',
  featured: true
}
  ];

export const featuredProjects = allProjects.filter(project => project.featured);
