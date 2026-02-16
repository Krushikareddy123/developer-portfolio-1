"use client";
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
    image: string;
    alt?: string;
    video?: string;
    link?: string;
}

const WorkImage = (props: Props) => {
    const [isVideo, setIsVideo] = useState(false);
    const [video, setVideo] = useState("");

    const handleMouseEnter = async () => {
        if (props.video) {
            // Assume video is in public folder or imported. 
            // Original code fetched from src/assets which is weird in Vite/Webpack if not strictly static.
            // in Next.js public folder is rooted at /.
            // We'll assume props.video is a path.
            setIsVideo(true);
            setVideo(props.video);
        }
    };

    return (
        <div className="work-image">
            <a
                className="work-image-in"
                href={props.link}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={() => setIsVideo(false)}
                target="_blank"
                data-cursor={"disable"}
            >
                {props.link && (
                    <div className="work-link">
                        <MdArrowOutward />
                    </div>
                )}
                {/* Next.js Image would be better but we need width/height. Using img for now to match CSS fluid width */}
                <img src={props.image} alt={props.alt} />
                {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
            </a>
        </div>
    );
};

export default WorkImage;
