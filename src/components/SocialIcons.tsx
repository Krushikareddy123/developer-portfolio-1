import { config } from "@/data/config";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
    // Simple vertical fixed social icons often found in portfolios
    return (
        <div className="social-icons fixed bottom-10 left-10 z-50 flex flex-col gap-4 text-xl mix-blend-difference text-white max-md:hidden">
            <a href={config.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accentColor)] transition-colors"><FaGithub /></a>
            <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accentColor)] transition-colors"><FaLinkedin /></a>

            <div className="w-[1px] h-20 bg-white mx-auto mt-4"></div>
        </div>
    );
};

export default SocialIcons;
