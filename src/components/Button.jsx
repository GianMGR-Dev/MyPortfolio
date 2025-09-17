import React from "react";
import Link from "next/link";
import '../app/globals.css';


const Button = ({ children, link }) => {
    return (
        <Link href={`${link}`}
        className="px-4 py-2 bg-[var(--terciary-color)] font-semibold rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            {children}
        </Link>   
        );
};

export default Button;
