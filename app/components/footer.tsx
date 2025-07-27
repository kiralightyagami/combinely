import React from 'react';

export const Footer = () => {
  return (
    <footer className="text-gray-400 py-8 border-t border-neutral-700/50 w-full mt-10 " >
      <div className="container mx-auto px-4 text-center">
        <div className="mb-2">
          <p className="text-sm">
            © 2025 – Combinely, Inc. All Rights Reserved.
          </p>
        </div>
        <div className="flex justify-center space-x-6 text-sm">
          <a 
            href="/terms" 
            className="hover:text-white transition-colors duration-200"
          >
            Terms
          </a>
          <a 
            href="/privacy" 
            className="hover:text-white transition-colors duration-200"
          >
            Privacy
          </a>
          <a 
            href="/legal" 
            className="hover:text-white transition-colors duration-200"
          >
            Legal
          </a>
          <a 
            href="/contact" 
            className="hover:text-white transition-colors duration-200"
          >
            Contact us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
