import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Rajib Gupta',
  description: 'Read my thoughts on web development, technology trends, and programming best practices.',
};

const BlogPage = () => {
  // Sample blog posts data - in a real app, this would come from a CMS or database
  const blogPosts = [
    {
      id: 'getting-started-with-nextjs-15',
      title: 'Getting Started with Next.js 15: What\'s New and Exciting',
      excerpt: 'Explore the latest features in Next.js 15, including the new app router improvements, enhanced performance optimizations, and developer experience enhancements.',
      date: '2024-12-20',
      readTime: '8 min read',
      category: 'Web Development',
      featured: true,
    },
    {
      id: 'mastering-tailwind-css',
      title: 'Mastering Tailwind CSS: Advanced Techniques and Best Practices',
      excerpt: 'Learn advanced Tailwind CSS techniques, custom configurations, and best practices for maintaining scalable design systems in modern web applications.',
      date: '2024-12-15',
      readTime: '12 min read',
      category: 'CSS',
      featured: true,
    },
    {
      id: 'typescript-tips-tricks',
      title: '10 TypeScript Tips and Tricks for Better Code',
      excerpt: 'Discover powerful TypeScript features and patterns that will help you write more maintainable, type-safe, and efficient code in your projects.',
      date: '2024-12-10',
      readTime: '6 min read',
      category: 'TypeScript',
      featured: false,
    },
    {
      id: 'react-performance-optimization',
      title: 'React Performance Optimization: A Complete Guide',
      excerpt: 'Learn essential techniques for optimizing React applications, including code splitting, memoization, and performance monitoring strategies.',
      date: '2024-12-05',
      readTime: '15 min read',
      category: 'React',
      featured: false,
    },
    {
      id: 'building-accessible-web-apps',
      title: 'Building Accessible Web Applications from the Ground Up',
      excerpt: 'A comprehensive guide to web accessibility, covering ARIA attributes, semantic HTML, keyboard navigation, and testing strategies.',
      date: '2024-11-28',
      readTime: '10 min read',
      category: 'Accessibility',
      featured: false,
    },
    {
      id: 'modern-css-layout-techniques',
      title: 'Modern CSS Layout Techniques: Grid vs Flexbox',
      excerpt: 'Understand when to use CSS Grid versus Flexbox, with practical examples and real-world layout scenarios.',
      date: '2024-11-20',
      readTime: '9 min read',
      category: 'CSS',
      featured: false,
    },
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              My Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Thoughts on web development, technology trends, and lessons learned 
              from building modern applications.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              My most popular and recent posts
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600">
                  <div className="w-full h-full bg-white dark:bg-gray-700 flex items-center justify-center group-hover:bg-opacity-90 transition-all duration-200">
                    <span className="text-gray-400 text-lg">Article Preview</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {formatDate(post.date)}
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-1 transition-transform duration-200">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              All Articles
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore all my blog posts
            </p>
          </div>

          <div className="space-y-8">
            {otherPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group block bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {formatDate(post.date)}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-1 transition-transform duration-200 inline-block">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get notified when I publish new articles and insights.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;