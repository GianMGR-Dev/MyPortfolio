import Navbar from "./Navbar";
import Link from "next/link";

import React from 'react';

const SecondCard = () => {
    return (
        <div className={`flex flex-col w-full md:w-1/2 h-full justify-center items-center bg-[var(--secondary-color)] border-0`}>
            <div className="flex flex-col text-white p-6 md:p-16 font-sans gap-5">
                <p className="text-lg text-gray-400 mb-2">
                    — Introduction
                </p>

                <h1 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 after:content-[''] after:block after:w-24 after:h-1.5 after:rounded-full after:bg-[var(--terciary-color)] after:mt-2">
                    Fullstack developer
                </h1>

                <p className="text-md text-gray-300 leading-relaxed mb-6">
                    Fullstack developer experienced in building modern web applications.
                    Skilled at creating intuitive and visually appealing front-end interfaces.
                    Focused on delivering efficient, scalable, and robust back-end solutions.
                </p>

                <Link href="/contact" className="text-center md:text-left text-center md:text-left text-xl text-[var(--terciary-color)] font-semibold hover:underline">
                    Let's do a project
                </Link>
            </div>
        </div>
    );
};

export default SecondCard