import { config } from "@/data/config";

const WhatIDo = () => {
    return (
        <div className="section-container py-20 px-[5vw]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Development */}
                <div className="what-box space-y-4">
                    <h3 className="text-2xl text-[var(--accentColor)] tracking-widest">{config.skills.develop.title}</h3>
                    <h2 className="text-4xl font-bold">{config.skills.develop.description}</h2>
                    <p className="text-gray-400 text-lg">{config.skills.develop.details}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {config.skills.develop.tools.map((tool, i) => (
                            <span key={i} className="px-3 py-1 border border-gray-700 rounded-full text-sm">{tool}</span>
                        ))}
                    </div>
                </div>

                {/* Design / Full Stack */}
                <div className="what-box space-y-4">
                    <h3 className="text-2xl text-[var(--accentColor)] tracking-widest">{config.skills.design.title}</h3>
                    <h2 className="text-4xl font-bold">{config.skills.design.description}</h2>
                    <p className="text-gray-400 text-lg">{config.skills.design.details}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {config.skills.design.tools.map((tool, i) => (
                            <span key={i} className="px-3 py-1 border border-gray-700 rounded-full text-sm">{tool}</span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhatIDo;
