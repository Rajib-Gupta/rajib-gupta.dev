import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = {
  'getting-started-with-nextjs-15': {
    title: 'Getting Started with Next.js 15: What\'s New and Exciting',
    excerpt: 'Explore the latest features in Next.js 15, including the new app router improvements, enhanced performance optimizations, and developer experience enhancements.',
    content: `
# Getting Started with Next.js 15: What's New and Exciting

Next.js 15 brings a wealth of new features and improvements that make building modern web applications even more enjoyable and efficient. In this comprehensive guide, we'll explore the most significant updates and how they can enhance your development workflow.

## Major New Features

### 1. Enhanced App Router Performance

The App Router has received significant performance improvements in Next.js 15. These optimizations include:

- **Faster cold starts**: Reduced initial loading time for your applications
- **Improved hydration**: Smoother client-side transitions
- **Better tree shaking**: Smaller bundle sizes automatically

### 2. Turbopack Improvements

Turbopack, the Rust-based bundler, has become more stable and faster:

\`\`\`bash
# Enable Turbopack for development
npm run dev --turbo
\`\`\`

The performance gains are substantial, especially for larger applications with many dependencies.

### 3. React 19 Support

Next.js 15 includes full support for React 19, bringing new features like:

- **React Compiler**: Automatic optimization of your React components
- **New Hooks**: Enhanced state management capabilities
- **Improved Suspense**: Better loading states and error boundaries

## Developer Experience Enhancements

### Improved Error Messages

Error messages are now more descriptive and actionable, making debugging much easier:

\`\`\`javascript
// Better error context and suggestions
export default function Page() {
  // Clear error messages for common mistakes
  return <div>Hello World</div>;
}
\`\`\`

### Enhanced TypeScript Support

TypeScript integration has been refined with better type inference and faster compilation:

\`\`\`typescript
// Improved type safety for API routes
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Better type inference and autocompletion
  return NextResponse.json({ message: 'Hello World' });
}
\`\`\`

## Migration Guide

Upgrading to Next.js 15 is straightforward:

1. **Update your dependencies**:
   \`\`\`bash
   npm install next@15 react@19 react-dom@19
   \`\`\`

2. **Update your configuration**:
   \`\`\`javascript
   // next.config.js
   module.exports = {
     experimental: {
       turbo: {
         // Enable new Turbopack features
       }
     }
   };
   \`\`\`

3. **Test your application** thoroughly, especially if you&apos;re using experimental features.

## Best Practices

Here are some best practices when working with Next.js 15:

### 1. Leverage the App Router

The App Router is now the recommended approach for new applications:

\`\`\`javascript
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
\`\`\`

### 2. Use Server Components by Default

Server Components provide better performance and SEO:

\`\`\`javascript
// Server Component (default)
export default function Page() {
  return <div>This renders on the server</div>;
}
\`\`\`

### 3. Optimize Images and Fonts

Take advantage of Next.js built-in optimizations:

\`\`\`javascript
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Page() {
  return (
    <div className={inter.className}>
      <Image
        src="/hero.jpg"
        alt="Hero image"
        width={800}
        height={600}
        priority
      />
    </div>
  );
}
\`\`\`

## Conclusion

Next.js 15 represents a significant step forward in web development tooling. The improvements in performance, developer experience, and React integration make it an excellent choice for modern web applications.

Whether you&apos;re starting a new project or considering an upgrade, Next.js 15 offers compelling reasons to make the switch. The enhanced developer experience alone makes the upgrade worthwhile.

Happy coding! 🚀
    `,
    date: '2024-12-20',
    readTime: '8 min read',
    category: 'Web Development',
    author: 'Rajib Gupta',
  },
  // Add more blog posts here as needed
};

type BlogPostParams = {
  slug: string;
};

export async function generateMetadata({ params }: { params: BlogPostParams }): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Post Not Found - Rajib Gupta',
    };
  }

  return {
    title: `${post.title} - Rajib Gupta`,
    description: post.excerpt,
  };
}

const BlogPostPage = ({ params }: { params: BlogPostParams }) => {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

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
      {/* Article Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {post.readTime}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-sm">R</span>
                </div>
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <span>{formatDate(post.date)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div 
              className="text-gray-700 dark:text-gray-300 leading-relaxed"
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75',
              }}
            >
              {/* In a real app, you'd use a markdown parser like react-markdown */}
              <div className="space-y-6">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('#')) {
                    const level = paragraph.match(/^#+/)?.[0].length || 1;
                    const text = paragraph.replace(/^#+\s/, '');
                    
                    if (level === 1) {
                      return (
                        <h1 key={index} className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                          {text}
                        </h1>
                      );
                    } else if (level === 2) {
                      return (
                        <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
                          {text}
                        </h2>
                      );
                    } else {
                      return (
                        <h3 key={index} className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                          {text}
                        </h3>
                      );
                    }
                  }
                  
                  if (paragraph.startsWith('```')) {
                    const code = paragraph.replace(/```\w*\n?|\n?```/g, '');
                    return (
                      <pre key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{code}</code>
                      </pre>
                    );
                  }
                  
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="mb-6">
                        {paragraph}
                      </p>
                    );
                  }
                  
                  return null;
                })}
              </div>
            </div>
          </div>

          {/* Share and Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 dark:text-gray-400 font-medium">Share this article:</span>
                <div className="flex space-x-2">
                  <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <button className="p-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors duration-200">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                More Articles
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;