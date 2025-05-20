// components/SEO/SifatPersonSchema.jsx
import { Helmet } from 'react-helmet-async';

export default function SifatPersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    /* — Core identity — */
    "name": "Sifat Bhatia",
    "jobTitle": "Front‑End Web Developer & Designer",
    "description": "Los Angeles‑based front‑end developer building animation‑rich interfaces in React, Next.js, and Webflow.",
    "image": "https://siftion.com/images/sifat-bhatia-los-angeles-web-developer-01.jpg",
    "url": "https://siftion.com",

    /* — Public profile links — */
    "sameAs": [
      "https://www.linkedin.com/in/siftion",
      "https://github.com/sifatbhatia",
      "https://www.instagram.com/sifatxo"
    ],

    /* — Nice‑to‑have metadata — */
    "birthDate": "1999-11-12",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Full Sail University",
      "sameAs": "https://www.fullsail.edu/"
    },
    "knowsAbout": [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Webflow",
      "UI/UX Animation",
      "Accessibility",
      "SEO"
    ],

    /* — Location — */
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "addressCountry": "US"
    }
  };

  return (
    <Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Helmet>
  );
}
