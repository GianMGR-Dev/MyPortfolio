"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavButton({ link, children, specificClassName }) {
    const pathname = usePathname();
    const label = String(children).toLowerCase();
    const currentPath = String(pathname).toLowerCase();
    const isActive = currentPath.includes(label);
    
    return (
        <Link href={String(link)}>
            <button
            className={`px-2 py-2.5 rounded font-bold transition-colors ${specificClassName} ${
            isActive 
            ?
            "text-[var(--terciary-color)] cursor-pointer text-lg lg:text-lg xl:text-xl 2xl:text-2xl " 
            :
            "text-gray-400 text-lg cursor-pointer text-lg lg:text-lg xl:text-xl 2xl:text-2xl transition-transform duration-100 ease-in-out hover:scale-105 hover:text-white"
            }`}
        >
                {children}
            </button>
        </Link>
    );
}
