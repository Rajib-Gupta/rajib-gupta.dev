import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About - Rajib Gupta',
  description: 'Learn more about Rajib Gupta, a passionate full-stack developer with expertise in modern web technologies.',
};

const AboutPage = () => {
  const skills = [
    {
      category: 'Programming Languages',
      technologies: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML5', 'CSS3'],
    },
    {
      category: 'Frontend & Frameworks',
      technologies: ['React.js', 'Angular', 'Node.js', 'Next.js', 'Tailwind CSS'],
    },
    {
      category: 'Backend & APIs',
      technologies: ['RESTful APIs', 'Express.js', 'Flask', 'FastAPI', 'Redis', 'API Security'],
    },
    {
      category: 'Databases',
      technologies: ['MySQL', 'MongoDB', 'PostgreSQL'],
    },
    {
      category: 'Cloud & DevOps',
      technologies: ['AWS (EC2, S3, RDS, Lambda)', 'Jenkins', 'Docker', 'Git', 'Webpack'],
    },
    {
      category: 'Testing & Practices',
      technologies: ['Jest', 'Jasmine Karma', 'React Testing Library', 'TDD', 'CI/CD', 'Agile/Scrum'],
    },
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Ogma IT Conceptions Pvt. Ltd.',
      location: 'Kolkata, India',
      period: 'Sep 2021 - Present',
      description: 'Designed and deployed RESTful APIs using Python and Node.js for financial, healthcare, and logistics products, driving 30% scalability improvement. Mentored 4+ junior developers in backend architecture, code reviews, and secure API practices, reducing bugs by 15%.',
      achievements: [
        'Managed AWS infrastructure (EC2, S3, RDS, Lambda) delivering performance optimization and cost controls',
        'Led Agile ceremonies and collaborated with product teams to enable CI/CD integration and fast delivery cycles',
        'Reduced pipeline costs through efficient deployment strategies and infrastructure optimization'
      ]
    },
    {
      title: 'Angular Developer Intern',
      company: 'Ogma IT Conceptions Pvt. Ltd.',
      location: 'Kolkata, India',
      period: 'Jul 2021 - Aug 2021',
      description: 'Started my professional journey as an Angular developer intern, working on frontend development projects and learning modern web development practices. This internship provided the foundation for my transition to a full-time developer role.',
      achievements: [
        'Developed responsive web applications using Angular framework',
        'Collaborated with senior developers on client projects',
        'Gained hands-on experience with component-based architecture and TypeScript'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I&apos;m a passionate full-stack developer who loves creating beautiful, functional, 
              and user-friendly digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Story */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                My Story
              </h2>
              <div className="prose prose-lg text-gray-600 dark:text-gray-400 space-y-4">
                <p>
                  Hello! I&apos;m Rajib, a results-driven Software Developer with 4 years of experience 
                  building scalable web and backend systems for enterprise clients. I specialize in 
                  JavaScript (React, Node.js, Angular), Python, RESTful APIs, and cloud deployments.
                </p>
                <p>
                  Throughout my career, I&apos;ve demonstrated a proven ability to design secure, 
                  high-performance data solutions while mentoring cross-functional teams. I&apos;m passionate 
                  about creating robust, scalable applications that solve real-world business challenges 
                  and drive meaningful impact.
                </p>
                <p>
                  I&apos;m currently seeking impactful engineering roles at leading technology companies, 
                  where I can leverage my expertise in full-stack development, cloud technologies, 
                  and team leadership to contribute to innovative projects that shape the future of technology.
                </p>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden relative">
                    <Image
                      src="https://drive.google.com/uc?export=view&id=1t276dGYvArlFRxMZBt1WXieMZNlJKkGe"
                      alt="Rajib Gupta - Full Stack Developer"
                      fill
                      className="object-cover rounded-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Here are the technologies I work with regularly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Leadership & Soft Skills
            </h3>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
              <div className="flex flex-wrap gap-3 justify-center">
                {['Communication', 'Leadership', 'Mentoring', 'Stakeholder Management', 'Analytical Thinking', 'Team Collaboration', 'Problem Solving'].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              My professional journey so far
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-start mb-4">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {job.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {job.company}
                    </p>
                    {job.location && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {job.location}
                      </p>
                    )}
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {job.period}
                    </p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {job.description}
                    </p>
                    {job.achievements && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {job.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            I&apos;m always interested in new opportunities and exciting projects.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Get In Touch
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;