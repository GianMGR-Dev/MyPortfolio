"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavButton({ link, children }) {
    const pathname = usePathname();
    const label = String(children).toLowerCase();
    const currentPath = String(pathname).toLowerCase();

    const isActive = currentPath.includes(label);
    
    return (
        <Link href={String(link)}>
            <button
            className={`px-4 py-2 rounded font-bold transition-colors ${
            isActive 
            ? 
            "text-[var(--terciary-color)] cursor-pointer after:c ontent-[''] after:block after:w-2 after:h-1.5 after:bg-[var(--terciary-color)] after:rounded-full after:mt-1 after:mx-auto lg:text-xl xl:text-2xl 2xl:text-3xl " 
            : 
            "text-gray-400 text-xl cursor-pointer lg:text-xl xl:text-2xl 2xl:text-3xl transition-transform duration-100 ease-in-out hover:scale-110"
            }`}
        >
                {children}
            </button>
        </Link>
    );
}
