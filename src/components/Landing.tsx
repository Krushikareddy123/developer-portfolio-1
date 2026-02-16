import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "@/data/config";

const Landing = ({ children }: PropsWithChildren) => {
    const nameParts = config.developer.fullName.split(" ");
    const firstName = nameParts[0] || config.developer.name;
    const lastName = nameParts.slice(1).join(" ") || "";

    return (
        <>
            <div className="landing-section" id="landingDiv">
                <div className="landing-container">
                    <div className="landing-intro">
                        <h2>Hello! I'm</h2>
                        <h1>
                            {firstName.toUpperCase()}
                            {' '}
                            <br />
                            {lastName && <span>{lastName.toUpperCase()}</span>}
                        </h1>
                    </div>
                    <div className="landing-info">
                        <h3>An</h3>
                        <h2 className="landing-info-h2">
                            <div className="landing-h2-1">AI Engineer</div>
                        </h2>
                        <h2>
                            <div className="landing-h2-info">Full-Stack Developer</div>
                        </h2>
                    </div>

                    {/* Static Image replacing 3D Model */}
                    <div className="landing-photo-container">
                        <img src="/images/mypicnbg.png" alt={config.developer.fullName} className="landing-photo" />
                    </div>
                </div>
                {children}
            </div>
        </>
    );
};

export default Landing;
