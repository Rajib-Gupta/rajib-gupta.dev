'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Fullstack Software Developer',
    'React & Node.js Expert',
    'Problem Solver',
    'Tech Enthusiast',
    'Next.js Specialist',
    'Angular Developer',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                Rajib{' '}
                <span 
                  className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(to right, #2563eb, #9333ea)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Gupta
                </span>
              </h1>
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
                  I'm a{' '}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold transition-all duration-500">
                    {roles[currentRole]}
                  </span>
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              With 4+ years of experience in fullstack development, I craft beautiful and functional 
              digital experiences using modern technologies. Passionate about creating scalable solutions 
              that make a difference and constantly learning new technologies to stay at the forefront of innovation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View My Work
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transform hover:scale-105 transition-all duration-200"
              >
                Get In Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Dedication</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-2">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="https://drive.google.com/uc?export=view&id=1t276dGYvArlFRxMZBt1WXieMZNlJKkGe"
                    alt="Rajib Gupta - Fullstack Software Developer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover rounded-full"
                    priority
                    onError={(e) => {
                      // Fallback to initial display if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback content */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center" style={{ display: 'none' }}>
                    <span className="text-8xl text-blue-600 dark:text-blue-400 font-bold">R</span>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center animate-bounce">
                <span className="text-2xl">💡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center animate-pulse">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;