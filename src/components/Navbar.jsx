"use client"
import {Menu, X} from 'lucide-react';
import Button from './NavButton.jsx';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className='relative w-full h-auto bg-[var(--secondary-color)] z-10'>
            <button className='absolute right-2 top-4 md:hidden' onClick={toggleMenu}>
                {isOpen ? <X className="h-9 w-9 text-[var(--white)]" /> : <Menu className="h-9 w-9 text-[var(--white)]" />}
            </button>
            
            {isOpen && (
                <div className='absolute w-full h-[100dvh] flex flex-col justify-center items-center bg-[var(--secondary-color)] p-2 md:hidden md:gap-4 md:py-3 top-0 left-0 z-10'>
                    <div className='absolute w-full h-full flex flex-col justify-center items-center bg-[var(--secondary-color)] p-2 md:gap-4 md:py-3 top-0 left-0 z-10'>
                        <Button link='/'>Home</Button>
                        <Button link='/works'>Works</Button>
                        <Button link='/experience'>Experience</Button>
                        <Button link='/contact'>Contact</Button>
                        <button className='absolute right-2 top-4' onClick={toggleMenu}>
                            {isOpen ? <X className="h-9 w-9 text-[var(--white)]" /> : <Menu className="h-9 w-9 text-[var(--white)]" />}
                        </button>
                    </div>
                </div>
            )}
            <div className='absolute w-full h-12 hidden md:flex md:flex-row md:justify-center md:items-center bg-[var(--principal-color)] md:p-2 md:gap-4 md:py-3 z-10'>
                <Button link='/'>Home</Button>
                <Button link='/works'>Works</Button>
                <Button link='/experience'>Experience</Button>
                <Button link='/contact'>Contact</Button>
            </div>
        </nav>
    );
}

export default Navbar;