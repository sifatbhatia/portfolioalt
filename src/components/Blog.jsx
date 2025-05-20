import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: "Modern Web Development Techniques I Use in Los Angeles",
    slug: "modern-web-development-techniques-los-angeles",
    excerpt: "Exploring the latest web development techniques I've been using for clients in Los Angeles, including React, NextJS, and more.",
    date: "May 18, 2025",
    author: "Sifat Bhatia",
    tags: ["React", "Web Development", "Los Angeles", "Frontend"],
    content: `
      <p>As a web developer based in Los Angeles, I've had the opportunity to work with various clients and projects that push the boundaries of modern web development. In this article, I want to share some of the techniques and approaches I've found most effective.</p>
      
      <h3>1. Component-Driven Development with React</h3>
      <p>React has revolutionized how we build web interfaces. Using a component-driven approach allows for better code organization, reusability, and maintainability. For Los Angeles clients needing complex user interfaces, I typically start by breaking down designs into composable components.</p>
      
      <h3>2. Server-Side Rendering with Next.js</h3>
      <p>Performance is crucial for user experience and SEO. Next.js provides an excellent framework for server-side rendering React applications, which significantly improves initial load times and search engine visibility.</p>
      
      <h3>3. Modern CSS Approaches</h3>
      <p>Tailwind CSS has become my go-to for styling. Its utility-first approach speeds up development while maintaining consistency across projects. For more complex applications, I combine Tailwind with CSS modules for component-scoped styling.</p>
      
      <h3>4. JAMstack Architecture</h3>
      <p>For many clients in Los Angeles, I've implemented JAMstack architecture, which leverages JavaScript, APIs, and Markup to create fast, secure, and scalable web applications without the complexity of traditional server-side systems.</p>
    `
  },
  {
    id: 2,
    title: "Building Music Industry Websites: My Experience with L'Affaire Musicale",
    slug: "music-industry-websites-laffaire-musicale",
    excerpt: "Insights from developing the L'Affaire Musicale website and other music industry projects in Los Angeles.",
    date: "May 10, 2025",
    author: "Sifat Bhatia",
    tags: ["Music Industry", "Web Design", "Case Study", "Los Angeles"],
    content: `
      <p>The music industry has unique requirements when it comes to web development. In this article, I'll share my experience working on the L'Affaire Musicale website and other music industry projects in Los Angeles.</p>
      
      <h3>Understanding the Audience</h3>
      <p>When developing websites for music events and artists, understanding the target audience is crucial. For L'Affaire Musicale, we needed to create an experience that appealed to electronic music enthusiasts while providing clear information about upcoming events.</p>
      
      <h3>Performance for Media-Rich Content</h3>
      <p>Music websites typically feature a lot of media content - images, videos, and audio players. Optimizing these elements for performance while maintaining quality was a key challenge that required implementing lazy loading, responsive images, and efficient video embedding techniques.</p>
      
      <h3>Mobile-First Design for Event Goers</h3>
      <p>Most people check event details on their phones, so ensuring a seamless mobile experience was essential. We implemented a mobile-first design approach with special attention to ticket purchasing flows and event information accessibility.</p>
    `
  }
];

const BlogPost = ({ post }) => (
  <motion.article 
    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
    <div className="flex items-center text-sm text-white/70 mb-4">
      <span>{post.date}</span>
      <span className="mx-2">•</span>
      <span>{post.author}</span>
    </div>
    <p className="text-white/80 mb-4">{post.excerpt}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {post.tags.map((tag, index) => (
        <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-xs">
          {tag}
        </span>
      ))}
    </div>
    <a href={`/blog/${post.slug}`} className="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
      Read more
    </a>
  </motion.article>
);

const Blog = () => {
  return (
    <section className="py-16 bg-[#030a1f] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-2">Blog</h1>
          <p className="text-white/70 mb-12">Web development insights from Sifat Bhatia, Los Angeles-based developer</p>
          
          {blogPosts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
          
          <div className="hidden">
            <h2>Web Development Blog by Sifat Bhatia | Los Angeles Web Developer</h2>
            <p>
              Welcome to the web development blog by Sifat Bhatia, a professional web developer based in Los Angeles, CA.
              Follow along for insights on modern web development techniques, case studies, and industry best practices.
            </p>
            <p>
              Sifat Bhatia shares his expertise in React, JavaScript, and full-stack development through articles and
              tutorials aimed at helping businesses and developers improve their web presence.
            </p>
            <p>
              Topics covered include front-end development, UI/UX design, performance optimization, and real-world
              project insights from Sifat Bhatia's work with Los Angeles clients in the music, entertainment, and
              technology industries.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
