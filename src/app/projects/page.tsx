import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects - Rajib Gupta",
  description:
    "Explore my portfolio of web development projects, showcasing modern technologies and creative solutions.",
};

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "NexusDash - Admin Dashboard",
      description:
        "The Ultimate Admin Dashboard Solution - Built with cutting-edge technologies including Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion. Transform your business with professional-grade analytics, sleek UI components, and enterprise-ready features. Perfect for SaaS platforms, e-commerce solutions, and modern web applications.",
      image: "/images/dashboard.jpg",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS v4",
        "Framer Motion",
        "React",
      ],
      github: "https://github.com/Rajib-Gupta/next-admin-dashboard-nexusdash",
      live: "https://nexusdash-lp0122sqd-rajibguptas-projects.vercel.app/",
      featured: true,
    },
    {
      id: 2,
      title: "AirStatus - Flight Tracking App",
      description:
        "A comprehensive real-time flight tracking application built with Next.js 15 and powered by AviationStack API. Features smart search capabilities, live flight updates, custom alerts, and an intuitive aviation-themed interface. Track flights worldwide with detailed status information and timing updates.",
      image: "/images/download.png",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "AviationStack API",
        "Tailwind CSS",
        "Real-time Updates",
      ],
      github: "https://github.com/Rajib-Gupta/realtime-flight-status",
      live: "https://check-you-flight.vercel.app/",
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website with dark mode and smooth animations.",
      image: "/images/protfolio.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://rajibgupta-dev.vercel.app/",
      featured: false,
    },
  ];
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A collection of projects that showcase my skills in web
              development, from concept to deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              My most recent and impactful work
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="w-full h-80 rounded-lg shadow-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                      <div className="w-full h-full rounded-lg overflow-hidden relative bg-white dark:bg-gray-800">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover z-10"
                          fill={true}
                          quality={100}
                          priority
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-300"></div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-800 font-medium rounded-lg transition-colors duration-200"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 font-medium rounded-lg transition-colors duration-200"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Other Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Additional projects and experiments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <div className="w-full h-full rounded-lg overflow-hidden relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      fill={true}
                      quality={100}
                      priority
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors duration-200"
                    >
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 bg-blue-600 text-white hover:bg-blue-700 rounded transition-colors duration-200"
                    >
                      Live
                    </a>
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
            Like What You See?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s collaborate on your next project and bring your ideas to
            life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Start a Project
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
