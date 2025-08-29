import { ProjectProps } from '../components/ProjectCard';

export const allProjects: ProjectProps[] = [
  {
    
    id: 'project-1',
    title: 'Go Green App (Farming Assistant)',
    description: 'AI-powered React Native app offering seasonal crop suggestions and real-time weather insights using OpenWeatherMap API.',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg',
    tags: ['mobile','React Native', 'Type Script', 'OpenWeather', 'Python'],
    liveUrl: 'https://example.com/gogreen',
    repoUrl: 'https://github.com/bhoomash/gogreen',
    featured: true
  },
  {
    id: 'project-2',
    title: 'E-Commerce Platform (Fertilizer)',
    description: 'Full-stack web application for selling fertilizers and farming tools with cart and product filtering support.',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg',
    tags: ['web','Html', 'Tailwind CSS', 'Java Script', 'PHP', 'Xampp'],
    liveUrl: 'https://example.com/fertilizershop',
    repoUrl: 'https://github.com/bhoomash/fertilizer-ecommerce',
    featured: true
  },
 
  {
    id: 'project-5',
    title: 'Portfolio Website',
    description: 'Clean and animated React portfolio showcasing my projects, skills, and background.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
    tags: ['web', 'React', 'Animations', 'UI/UX', 'Type Script'],
    liveUrl: 'https://portfolio-official-sigma.vercel.app/',
    repoUrl: 'https://github.com/bhoomash/portfolio-official'
  }
];

export const featuredProjects = allProjects.filter(project => project.featured);
