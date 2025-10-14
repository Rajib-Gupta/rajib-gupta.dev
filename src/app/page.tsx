import HeroSection from '@/components/HeroSection';
import ResumeDownload from '@/components/ResumeDownload';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rajib Gupta - Full Stack Software Developer | React, Node.js, Python Expert',
  description: 'Rajib Gupta is a results-driven Full Stack Software Developer with 4+ years of experience building scalable web applications. Expert in React, Node.js, Angular, Python, AWS cloud deployments. Based in Kolkata, India.',
  alternates: {
    canonical: '/',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rajib Gupta",
  "jobTitle": "Full Stack Software Developer",
  "description": "Results-driven Software Developer with 4+ years of experience building scalable web and backend systems for enterprise clients.",
  "url": "https://rajibgupta.dev",
  "image": "https://rajibgupta.dev/images/rajib-gupta-profile.jpg",
  "sameAs": [
    "https://github.com/Rajib-Gupta",
    "https://linkedin.com/in/rajibgupta", // Replace with your actual LinkedIn
    "https://twitter.com/rajibgupta" // Replace with your actual Twitter
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Ogma IT Conceptions Pvt. Ltd.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kolkata",
      "addressCountry": "India"
    }
  },
  "alumniOf": {
    "@type": "Organization",
    "name": "Ogma IT Conceptions Pvt. Ltd.",
    "description": "Angular Developer Intern (Jul 2021 - Aug 2021)"
  },
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Full Stack Software Developer",
    "occupationLocation": {
      "@type": "City",
      "name": "Kolkata, India"
    },
    "skills": [
      "JavaScript", "React", "Node.js", "Angular", "Python", "TypeScript", 
      "Next.js", "Express.js", "Flask", "FastAPI", "MySQL", "MongoDB", 
      "AWS", "Docker", "Git", "RESTful APIs", "CI/CD"
    ]
  },
  "knowsAbout": [
    "Full Stack Development", "React Development", "Node.js Development", 
    "Python Development", "JavaScript", "TypeScript", "AWS Cloud Services",
    "API Development", "Database Management", "Agile Development"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div>
        <HeroSection />
      
      {/* Resume Download Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Download my resume to learn more about my experience and skills.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <ResumeDownload />
          </div>
        </div>
      </section>
      
      {/* Featured Work Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Featured Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project cards will be added here */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="h-40 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg mb-4"></div>
                <h3 className="font-semibold text-lg mb-2">Project Coming Soon</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Exciting projects are in development. Check back soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
