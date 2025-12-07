import Link from 'next/link';
import { Linkedin, Github} from 'lucide-react';

const SocialNetworks = () => {

      const socialLinks = [
        { name: 'GitHub', icon: Github, href: 'https://github.com/GianMGR-Dev', color: 'hover:text-[var(--white)]' },
        { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/gian-gutierrez-7a859737b/', color: 'hover:text-blue-400' }
      ];

    return (
        <div className="p-2 rounded-3xl flex flex-row justify-center items-center gap-4">
            <div className="flex space-x-4">
            {socialLinks.map((link) => (
                <a 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className={`transition duration-300 ease-in-out text-gray-500 ${link.color}`}
                >
                <link.icon size={32} />
                </a>
            ))}
            </div>
        </div>
    )
}

export default SocialNetworks;