import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Copy, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';

interface ShareButtonProps {
  url: string;
  title: string;
  description: string;
  isMobile?: boolean;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url, title, description, isMobile = false }) => {
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description);

    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${url}`;
        break;
      case 'instagram':
        handleCopyLink();
        window.open('https://www.instagram.com/', '_blank');
        return;
      case 'pinterest':
        shareUrl = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
    setShareMenuOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShareMenuOpen(!shareMenuOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all hover:shadow-md"
        style={{
          backgroundColor: '#FFFFFF',
          color: '#8B4513',
          border: '1px solid #E8DDD0'
        }}
      >
        <Share2 className="h-4 w-4" />
        <span>Share</span>
      </button>

      <AnimatePresence>
        {shareMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setShareMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`rounded-lg shadow-lg overflow-hidden z-50 ${
                isMobile
                  ? 'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
                  : 'absolute top-full left-0 mt-2'
              }`}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E8DDD0',
                minWidth: '200px'
              }}
            >
              <button
                onClick={handleCopyLink}
                className="w-full flex items-center gap-3 px-4 py-3 transition-colors hover:bg-opacity-90"
                style={{
                  backgroundColor: copySuccess ? '#F5F0EA' : '#FFFFFF',
                  color: '#3D1E0B'
                }}
              >
                <Copy className="h-4 w-4" style={{ color: '#8B4513' }} />
                <span className="text-sm font-medium">
                  {copySuccess ? 'Copied!' : 'Copy Link'}
                </span>
              </button>
              <button
                onClick={() => handleShare('instagram')}
                className="w-full flex items-center gap-3 px-4 py-3 transition-colors"
                style={{ backgroundColor: '#FFFFFF', color: '#3D1E0B' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5F0EA'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
              >
                <Instagram className="h-4 w-4" style={{ color: '#8B4513' }} />
                <span className="text-sm font-medium">Instagram</span>
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="w-full flex items-center gap-3 px-4 py-3 transition-colors"
                style={{ backgroundColor: '#FFFFFF', color: '#3D1E0B' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5F0EA'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
              >
                <Facebook className="h-4 w-4" style={{ color: '#8B4513' }} />
                <span className="text-sm font-medium">Facebook</span>
              </button>
              <button
                onClick={() => handleShare('pinterest')}
                className="w-full flex items-center gap-3 px-4 py-3 transition-colors"
                style={{ backgroundColor: '#FFFFFF', color: '#3D1E0B' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5F0EA'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#8B4513' }}>
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm font-medium">Pinterest</span>
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="w-full flex items-center gap-3 px-4 py-3 transition-colors"
                style={{ backgroundColor: '#FFFFFF', color: '#3D1E0B' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5F0EA'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
              >
                <Linkedin className="h-4 w-4" style={{ color: '#8B4513' }} />
                <span className="text-sm font-medium">LinkedIn</span>
              </button>
              <button
                onClick={() => handleShare('email')}
                className="w-full flex items-center gap-3 px-4 py-3 transition-colors"
                style={{ backgroundColor: '#FFFFFF', color: '#3D1E0B' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5F0EA'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
              >
                <Mail className="h-4 w-4" style={{ color: '#8B4513' }} />
                <span className="text-sm font-medium">Email</span>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShareButton;
