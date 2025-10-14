'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ResumeDownloadProps {
  resumeUrl?: string;
  className?: string;
}

const ResumeDownload = ({ 
  resumeUrl = "https://drive.google.com/file/d/1SuQfRrWF-LPlwsqaGl7z2WX5BgPy8NTR/view?usp=sharing", // Replace with your actual resume file ID
  className = "" 
}: ResumeDownloadProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleDownload = async () => {
    setIsDownloading(true);
    setDownloadStatus('idle');

    try {
      // Track the download event by sending notification email
      const response = await fetch('/api/track-resume-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer || 'Direct',
        }),
      });

      // Create a link and trigger download
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Rajib_Gupta_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      if (response.ok) {
        setDownloadStatus('success');
      } else {
        setDownloadStatus('error');
      }
    } catch (error) {
      console.error('Error tracking download:', error);
      setDownloadStatus('error');
      
      // Still allow download even if tracking fails
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Rajib_Gupta_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setIsDownloading(false);
      // Reset status after 3 seconds
      setTimeout(() => setDownloadStatus('idle'), 3000);
    }
  };

  return (
    <div className={`${className}`}>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-center">
        <div className="mb-4">
          <div className="w-20 h-24 mx-auto mb-4 rounded-lg overflow-hidden border-2 border-white border-opacity-30 bg-white bg-opacity-10 relative">
            <Image 
              src="https://drive.google.com/uc?export=view&id=1t276dGYvArlFRxMZBt1WXieMZNlJKkGe"
              alt="Resume Preview"
              fill
              className="object-cover"
              onError={() => {
                console.log('Image failed to load');
              }}
            />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Download My Resume
          </h3>
          <p className="text-blue-100 text-sm mb-6">
            Get a copy of my latest resume with all my experience, skills, and achievements.
          </p>
        </div>

        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isDownloading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Downloading...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </div>
          )}
        </button>

        {downloadStatus === 'success' && (
          <div className="mt-4 p-3 bg-green-100 bg-opacity-20 border border-green-200 border-opacity-30 rounded-lg">
            <div className="flex items-center justify-center text-green-100 text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Download started! I've been notified of your interest.
            </div>
          </div>
        )}

        {downloadStatus === 'error' && (
          <div className="mt-4 p-3 bg-red-100 bg-opacity-20 border border-red-200 border-opacity-30 rounded-lg">
            <div className="flex items-center justify-center text-red-100 text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Download started, but notification failed.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeDownload;