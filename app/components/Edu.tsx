'use client';

import { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
  
    {
      id: 2,
      title: 'Live Chat AI',
      description: 'an AI-powered chatbot platform designed to automate customer support and enhance user engagement.The platform allows businesses to train chatbots using their own data sources, such as websites, PDFs, and Q&A documents, ensuring personalized and context-aware interactions.',
      image: 'pic2.png',
      category: 'web',
      technologies: ['React.js', 'Node.js','Django', 'TensorFlow'],
      // video: "https://drive.google.com/file/d/1Q0eE7dwnpVq9wtqQ0IbcDuVVm0OpAMWd/view",
      liveUrl: 'https://livechatai.com/',
      githubUrl: 'https://livechatai.com/',
    },
    {
      id: 3,
      title: 'Glia',
      description: 'AI-powered customer service platform enabling seamless voice, video, and messaging interactions with real-time agent support',
      image: 'pic3.png',
      category: 'web',
      technologies: ['PyTorch', 'React.js', 'TypeScript', 'WebRTC', 'Node.js'],
      // video: "https://drive.google.com/file/d/1Q0eE7dwnpVq9wtqQ0IbcDuVVm0OpAMWd/view",
      liveUrl: 'https://www.glia.com/',
      githubUrl: 'https://www.glia.com/',
    },
      {
      id: 1,
      title: 'SnatchBot',
      description: 'an AI-powered chatbot platform that automates customer support.It handles queries, books meetings, processes payments, and more, offering easy setup with no-code integration to improve customer service efficiency.',
      image: 'pic1.png',
      category: 'web',
      technologies: ['JavaScript', 'Python', 'Node.js', 'PyTorch'],
      // video: "https://drive.google.com/file/d/15Q6l2QwNA0jizkqTdnAKALB9FDt9uDOi/view",
      liveUrl: 'https://snatchbot.com',
      githubUrl: 'https://snatchbot.com',
    },
    {
      id: 4,
      title: 'Shop panerabread',
      description: 'this is Panera Breads online store offering branded merchandise like apparel, kitchenware, and novelty items.',
      image: 'pic4.png',
      category: 'e-commerce',
      technologies: ['Shopify', 'Vue.js', 'Express', 'Payment Integration'],
      video: "https://drive.google.com/file/d/1QBfzxb1HtNLSOqoSx1F93i7MDCKCDAXk/view",
      liveUrl: 'https://shop.panerabread.com/',
      githubUrl: 'https://shop.panerabread.com/',
    },

    {
      id: 5,
      title: 'WeTravel',
      description: 'WeTravel is a platform for organizing group travel, enabling trip creation, payment collection, and communication with participants.',
      image: 'pic5.png',
      category: 'travel',
      technologies: ['Vue', 'Nuxt', 'Python', 'Node', 'Strip/Paypal API'],
      video: "https://drive.google.com/file/d/1qT8_Xa5q-J7RkQOChMLsfLbIPJ2WTuAv/view",
      liveUrl: 'https://www.wetravel.com/',
      githubUrl: 'https://www.wetravel.com/',
    },
    {
      id: 6,
      title: 'E-Commence : Maplin',
      description: 'Maplin is a UK-based retailer that specializes in electronics and technology products. It has a long history and was originally a chain of high street stores, but it shifted its focus to an online-only presence in recent years.',
      image: 'pic6.png',
      category: 'e-commerce',
      technologies: ['Vue', 'Nuxt', 'Python', 'Node'],
      // video: "https://drive.google.com/file/d/1TnB6jG0HF5Bx2lMqGsXwXZFlwfU2ukfS/view",
      liveUrl: 'https://www.maplin.co.uk/',
      githubUrl: 'https://www.maplin.co.uk/',
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'AI' },
    { id: 'e-commerce', label: 'E-commerce' },
    { id: 'travel', label: 'Travel ' },
    // { id: 'design', label: '' },
    // { id: 'design', label: 'Travel ' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
    
    </section>
  );
}
