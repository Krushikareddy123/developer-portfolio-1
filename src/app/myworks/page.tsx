"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";
import { config } from "@/data/config";
import WorkImage from "@/components/WorkImage";
// Reuse styles from Work.css or create specific ones. 
// For simplicity, using inline grid or tailwind.

const MyWorks = () => {
    // A simple grid page for all works
    return (
        <main className="min-h-screen pt-24 pb-20 px-[5vw]">
            <Navbar />
            <SocialIcons />

            <h1 className="text-6xl mb-12 font-thin">All <span className="text-[var(--accentColor)] font-bold">Works</span></h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {config.projects.map((project, index) => (
                    <div key={project.id} className="bg-[#1a1a1a] rounded-xl overflow-hidden group">
                        <div className="aspect-video relative overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2 flex justify-between">
                                {project.title}
                                <span className="text-sm font-normal text-gray-500">{project.category}</span>
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                            <p className="text-[var(--accentColor)] text-xs">{project.technologies}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default MyWorks;
