import React from 'react';

export default function Footer() {
const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-(--primary) text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <span className="text-white font-bold text-lg">Permitchi</span>
            <p className="mt-2 text-sm text-gray-400">
              Creating intuitive creative works of art.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} Permitchi. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

