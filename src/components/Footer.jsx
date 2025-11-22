// ...existing code...
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const App = () => {
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/GianMGR-Dev', color: 'hover:text-[var(--white)]' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/gian-gutierrez-7a859737b/', color: 'hover:text-blue-400' },
    { name: 'Email', icon: Mail, href: 'mailto:giangutierrezromero@gmail.com', color: 'hover:text-yellow-400' },
  ];

  return (
    <footer className="w-full z-[10] bg-[var(--soft-black)] text-white py-10 md:py-16 border-t border-[#3a3d42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center justify-center space-y-6">

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className={`transition duration-300 ease-in-out text-gray-500 ${link.color}`}
              >
                <link.icon size={28} />
              </a>
            ))}
          </div>

          <p className="text-md text-gray-400 pt-4">
            &copy; {new Date().getFullYear()} Gian Gutierrez. All rights reserved.
          </p>
        </div>

        <div className="text-sm text-gray-600 text-center mt-8">
            Designed and developed by <span className="text-[var(--terciary-color)]">Gian Gutierrez</span>. Built with Next.js and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default App;