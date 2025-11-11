import Navbar from "./Navbar";

import React from 'react';

const SecondCard = () => {
    return (
        <div className={`flex flex-col w-1/2 h-full justify-center items-center bg-[var(--secondary-color)] gap-3`}>
            <Navbar />
            <div className="flex flex-col text-white p-8 md:p-16 font-sans gap-5">
                <p className="text-lg text-gray-400 mb-2">
                    — Introduction
                </p>

                <h1 className="text-2xl md:text-5xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 after:content-[''] after:block after:w-24 after:h-1.5 after:rounded-full after:bg-[var(--terciary-color)] after:mt-2">
                    Fullstack developer
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                    Fullstack developer experienced in building modern web applications.
                    Skilled at creating intuitive and visually appealing front-end interfaces.
                    Focused on delivering efficient, scalable, and robust back-end solutions.
                </p>

                <a href="#" className="flex items-center text-xl text-[var(--terciary-color)] font-semibold hover:underline">
                    Let's do a project
                    <span className="ml-2 text-xl transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                        →
                    </span>
                </a>
            </div>
        </div>
    );
};

export default SecondCard