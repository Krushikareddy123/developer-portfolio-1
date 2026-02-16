"use client";
import "./styles/Contact.css";
import { config } from "@/data/config";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    useEffect(() => {
        const contactTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact-section",
                start: "top 80%",
                end: "bottom center",
                toggleActions: "play none none none",
            },
        });

        // Animate title
        contactTimeline.fromTo(
            ".contact-section h3",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );

        // Animate contact boxes
        contactTimeline.fromTo(
            ".contact-box",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" },
            "-=0.4"
        );

        return () => {
            contactTimeline.kill();
        };
    }, []);

    return (
        <div className="contact-section section-container" id="contact">
            <div className="contact-container">
                <h3>{config.developer.fullName}</h3>
                <div className="contact-flex">
                    <div className="contact-box">
                        <h4>Email</h4>
                        <p>
                            <a href={`mailto:${config.contact.email}`} data-cursor="disable">
                                {config.contact.email}
                            </a>
                        </p>
                        <h4>Location</h4>
                        <p>
                            <span>{config.social.location}</span>
                        </p>
                    </div>
                    <div className="contact-box">
                        <h4>Social</h4>
                        <div className="social-links">
                            <a href={config.contact.github} target="_blank" rel="noopener noreferrer" className="contact-social">
                                Github <MdArrowOutward />
                            </a>
                            <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social">
                                Linkedin <MdArrowOutward />
                            </a>
                            <a href={config.contact.twitter} target="_blank" rel="noopener noreferrer" className="contact-social">
                                Twitter <MdArrowOutward />
                            </a>
                            <a href={config.contact.facebook} target="_blank" rel="noopener noreferrer" className="contact-social">
                                Facebook <MdArrowOutward />
                            </a>
                            <a href={config.contact.instagram} target="_blank" rel="noopener noreferrer" className="contact-social">
                                Instagram <MdArrowOutward />
                            </a>
                        </div>
                    </div>
                    <div className="contact-box">
                        <h2>
                            Designed and Developed <br /> by <span>{config.developer.fullName}</span>
                        </h2>
                        <h5>
                            <MdCopyright /> {new Date().getFullYear()}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
