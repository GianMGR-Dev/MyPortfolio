import Link from 'next/link';
import { Linkedin, Github} from 'lucide-react';

const SocialNetworks = () => {

    const socialLinks = [
        { name: 'GitHub', icon: Github, href: 'https://github.com/GianMGR-Dev', color: 'hover:text-gray-500' },
        { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/gian-gutierrez-7a859737b/', color: 'hover:text-blue-400' }
    ];

    return (
        <div className="p-2 rounded-3xl flex flex-row justify-center items-center gap-4 pt-4">
            <div className="flex space-x-4">
            {socialLinks.map((link) => (
                <a
                link-key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className={`transition duration-300 ease-in-out text-white ${link.color}`}
                >
                <link.icon className='w-8 h-8'/>
                </a>
            ))}
            </div>
        </div>
    )
}

export default SocialNetworks;