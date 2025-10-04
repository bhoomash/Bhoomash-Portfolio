import { ProjectProps } from '../components/ProjectCard';

export const allProjects: ProjectProps[] = [
  {
    id: 'project-1',
    title: 'Go Green App (Farming Assistant)',
    description: 'AI-powered React Native app offering seasonal crop suggestions and real-time weather insights using OpenWeatherMap API.',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg',
    tags: ['mobile','React Native', 'TypeScript', 'OpenWeather', 'Python'],
    liveUrl: 'https://example.com/gogreen',
    repoUrl: 'https://github.com/bhoomash/gogreen',
    featured: true
  },
  {
    id: 'project-2',
    title: 'E-Commerce Platform (Fertilizer)',
    description: 'Full-stack web application for selling fertilizers and farming tools with cart and product filtering support.',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg',
    tags: ['web','HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'XAMPP'],
    liveUrl: 'https://example.com/fertilizershop',
    repoUrl: 'https://github.com/bhoomash/fertilizer-ecommerce',
    featured: true
  },
  {
    id: 'project-3',
    title: 'LockBin (Secure Encrypted Messages)',
    description: 'React web app for encrypted message sharing with password-based AES encryption and temporary shareable links.',
    image: 'https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg',
    tags: ['web','React', 'JavaScript', 'AES', 'Encryption', 'Security'],
    liveUrl: 'https://lock-bin.netlify.app/',
    repoUrl: 'https://github.com/bhoomash/lockbin',
    featured: true
  },
  {
    id: 'project-5',
    title: 'Portfolio Website',
    description: 'Clean and animated React portfolio showcasing my projects, skills, and background.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
    tags: ['web', 'React', 'Animations', 'UI/UX', 'TypeScript'],
    liveUrl: 'https://bhoomash.me/',
    repoUrl: 'https://github.com/bhoomash/portfolio-official',
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
  }
  ];

export const featuredProjects = allProjects.filter(project => project.featured);
