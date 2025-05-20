const projects = [
  {
    id: 0,
    slug: "jworra",
    title: "JWorra",
    description: "Professional website for DJ and producer J. Worra featuring music, tour dates, and latest updates",
    detailedDescription: "J. Worra is the professional alias of Jamie Sitter, a DJ and producer originally from Chicago, now based in Los Angeles. She has carved a niche in the dance music scene by blending classic house rhythms with contemporary tech elements, resulting in a distinctive and captivating sound. Her official website, jworra.com, serves as a central hub for her music releases, tour dates, and latest updates.",
    image: "/webp/jworra.webp",
    technologies: ["PHP", "JavaScript", "FontAwesome", "CSS", "HTML"],
    link: "https://www.jworra.com/",
    features: [
      "Home page showcasing featured content and recent releases",
      "Interactive tour calendar with ticket purchasing",
      "Music section with streaming platform integrations",
      "Detailed artist biography and career highlights",
      "Contact management and booking information",
      "Responsive design for all devices",
      "Integration with major music platforms"
    ],
    challenges: [
      "Implementing real-time tour date updates and ticket availability",
      "Creating seamless integration with multiple music streaming platforms",
      "Designing an intuitive user experience for fans and industry professionals",
      "Optimizing performance for media-rich content",
      "Ensuring cross-platform compatibility"
    ]
  },
  {
    id: 1,
    slug: "laffairemusicale",
    title: "L'Affaire Musicale",
    description: "Official website for L'Affaire Musicale, an electronic music event brand in Los Angeles",
    detailedDescription: "L'Affaire Musicale is a prominent electronic music event brand based in Los Angeles, known for hosting cutting-edge music events featuring both established and emerging artists. The website serves as the central hub for event announcements, ticket sales, artist information, and brand content.",
    image: "/webp/laffairemusicale.webp",
    technologies: ["Squarespace", "JavaScript", "CSS", "HTML"],
    link: "https://www.laffairemusicale.com",
    features: [
      "Event calendar and ticket purchasing",
      "Artist profiles and music previews",
      "Photo and video galleries of past events",
      "Newsletter signup for event announcements",
      "Mobile-responsive design",
      "Social media integration"
    ],
    challenges: [
      "Creating a seamless event booking experience",
      "Managing high traffic during event announcements",
      "Implementing dynamic content updates",
      "Optimizing media-rich content loading",
      "Ensuring secure payment processing"
    ]
  },
  {
    id: 2,
    slug: "cherrytooth",
    title: "Cherrytooth",
    description: "Professional DJ and music producer's portfolio and booking platform",
    detailedDescription: "Cherrytooth is the digital home for an electronic music DJ and producer, featuring a dynamic portfolio of music releases, upcoming shows, and a booking platform. The website showcases Cherrytooth's unique sound and brand through an immersive audio-visual experience. The site includes music players, tour dates, and a direct booking system for events and collaborations.",
    image: "/webp/cherrytooth.webp",
    image2: "/images/cherrytooth.png",
    technologies: ["React", "JavaScript", "CSS", "HTML", "Responsive Design", "Audio Web API"],
    link: "https://open.spotify.com/artist/3neju4j8u80IBvGawKA3dv",
    features: [
      "Interactive music player with sample tracks",
      "Upcoming shows and tour dates",
      "Direct booking system for events",
      "Discography and music releases",
      "Responsive design for all devices",
      "Social media integration",
      "Mailing list signup"
    ],
    challenges: [
      "Creating an immersive audio-visual experience",
      "Implementing smooth audio playback across browsers",
      "Designing for both desktop and mobile experiences",
      "Integrating with music streaming platforms",
      "Ensuring fast load times with rich media content"
    ]
  },
  {
    id: 3,
    slug: "starconsciousness",
    title: "Star Consciousness",
    description: "A platform for consciousness exploration and spiritual growth",
    detailedDescription: "Star Consciousness is a digital sanctuary designed to facilitate personal growth, spiritual exploration, and conscious living. The platform offers a variety of resources including guided meditations, spiritual teachings, and community features to support individuals on their journey of self-discovery and higher consciousness.",
    image: "/webp/starconsciousness.webp",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    link: "#",
    features: [
      "Guided meditation library",
      "Spiritual teachings and resources",
      "Community forum",
      "Personal growth tracking",
      "Event calendar for workshops and retreats"
    ],
    challenges: [
      "Creating a calming and intuitive user interface",
      "Implementing secure user authentication",
      "Managing user-generated content",
      "Ensuring cross-platform compatibility",
      "Optimizing for low-bandwidth connections"
    ]
  },
  {
    id: 4,
    category: "misc",
    slug: "filmflow",
    title: "FilmFlow",
    description: "Interactive platform for film enthusiasts to discover and organize movies",
    detailedDescription: "FilmFlow is a comprehensive movie discovery platform that helps users find, organize, and track films they want to watch. With a vast database of movies, personalized recommendations, and watchlist features, FilmFlow enhances the movie-watching experience for cinephiles and casual viewers alike.",
    image: "/webp/filmflow.webp",
    technologies: ["React", "Redux", "Node.js", "MongoDB", "REST API"],
    link: "https://filmflow.siftion.com",
    features: [
      "Movie search and discovery",
      "Personalized recommendations",
      "Watchlist and rating system",
      "User profiles and reviews",
      "Responsive design"
    ],
    challenges: [
      "Integrating with movie databases",
      "Implementing recommendation algorithms",
      "Managing user data securely",
      "Optimizing search performance"
    ]
  },
  {
    id: 5,
    slug: "meowgen",
    title: "Meowgen",
    description: "AI-powered cat image generator using machine learning to create unique cat pictures",
    detailedDescription: "Meowgen is an AI-powered platform that generates unique cat images using advanced machine learning models. Users can create custom cat pictures with various styles, colors, and themes. The platform is built with modern web technologies and provides a seamless user experience for cat lovers and content creators.",
    image: "/webp/Meowgen.webp",
    technologies: ["React", "Node.js", "Machine Learning", "Python", "TensorFlow"],
    link: "https://meowgen.siftion.com",
    features: [
      "AI-powered cat image generation",
      "Multiple style and theme options",
      "High-resolution image downloads",
      "User-friendly interface",
      "Responsive design for all devices"
    ],
    challenges: [
      "Training the AI model with diverse cat images",
      "Optimizing image generation speed",
      "Ensuring high-quality output",
      "Managing server resources for ML processing"
    ]
  },
  {
    id: 6,
    slug: "pupgen",
    title: "Pupgen",
    description: "AI-powered dog image generator creating unique and adorable dog pictures",
    detailedDescription: "Pupgen is an AI-driven platform that specializes in generating unique dog images. Using state-of-the-art machine learning algorithms, it creates high-quality, diverse dog pictures that can be customized by breed, style, and other parameters. The platform is designed for dog lovers, content creators, and marketing professionals.",
    image: "/webp/Pupgen.webp",
    technologies: ["React", "Node.js", "Machine Learning", "Python", "PyTorch"],
    link: "https://pupgen.siftion.com",
    features: [
      "Custom dog image generation",
      "Breed-specific image creation",
      "Style transfer options",
      "High-resolution downloads",
      "Responsive web interface"
    ],
    challenges: [
      "Handling various dog breeds and features",
      "Maintaining realistic proportions",
      "Optimizing for mobile devices",
      "Scaling the ML backend"
    ]
  },
  {
    id: 6,
    slug: "pixsqueeze",
    title: "PixSqueeze",
    description: "Online image compression tool that reduces file size while maintaining quality",
    detailedDescription: "PixSqueeze is a powerful yet simple-to-use online tool for compressing images without significant loss of quality. It's designed for web developers, designers, and content creators who need to optimize images for faster loading times. The platform supports various image formats and provides instant compression results.",
    image: "/webp/pixsqueeze.webp",
    technologies: ["JavaScript", "WebAssembly", "HTML5", "CSS3", "Node.js"],
    link: "https://pixsqueeze.siftion.com",
    features: [
      "Bulk image compression",
      "Format conversion",
      "Quality adjustment",
      "Drag and drop interface",
      "Instant preview"
    ],
    challenges: [
      "Maintaining image quality during compression",
      "Handling large files efficiently",
      "Cross-browser compatibility",
      "Client-side processing for privacy"
    ]
  }
];

export default projects;
